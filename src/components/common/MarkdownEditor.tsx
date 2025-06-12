import {
    headingsPlugin,
    listsPlugin,
    quotePlugin,
    markdownShortcutPlugin,
    MDXEditor,
    toolbarPlugin,
    UndoRedo,
    codeMirrorPlugin,
    BoldItalicUnderlineToggles,
    CreateLink,
    linkDialogPlugin,
    CodeToggle,
    Separator,
    StrikeThroughSupSubToggles,
    ListsToggle,
    BlockTypeSelect,
    InsertTable,
    InsertCodeBlock,
    codeBlockPlugin,
    ChangeCodeMirrorLanguage,
    ConditionalContents,
    tablePlugin,
    type MDXEditorMethods
} from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';
import type { Ref } from 'react';

const MarkdownEditor = ({
    ref,
    content = '',
    disabled = false
}: {
    ref?: Ref<MDXEditorMethods>;
    content?: string;
    disabled?: boolean;
}) => {
    return (
        <div className="h-100 overflow-y-auto rounded-[0.375rem] border-1 border-[#dddddd]">
            <MDXEditor
                readOnly={disabled}
                ref={ref}
                markdown={content}
                className="prose max-w-none"
                contentEditableClassName="h-full"
                plugins={[
                    linkDialogPlugin(),
                    headingsPlugin({ allowedHeadingLevels: [2, 3] }),
                    listsPlugin(),
                    quotePlugin(),
                    tablePlugin(),
                    markdownShortcutPlugin(),
                    codeBlockPlugin({ defaultCodeBlockLanguage: 'js' }),
                    codeMirrorPlugin({
                        codeBlockLanguages: {
                            js: 'JavaScript',
                            css: 'CSS',
                            html: 'HTML'
                        }
                    }),
                    toolbarPlugin({
                        toolbarClassName: 'mdxToolbar',
                        toolbarContents: () => (
                            <>
                                <UndoRedo />
                                <Separator />
                                <BoldItalicUnderlineToggles />
                                <CodeToggle />
                                <Separator />
                                <StrikeThroughSupSubToggles />
                                <Separator />
                                <ListsToggle />
                                <Separator />
                                <BlockTypeSelect />
                                <Separator />
                                <CreateLink />
                                <InsertTable />
                                <ConditionalContents
                                    options={[
                                        {
                                            when: (editor) =>
                                                editor?.editorType ===
                                                'codeblock',
                                            contents: () => (
                                                <ChangeCodeMirrorLanguage />
                                            )
                                        },
                                        {
                                            fallback: () => (
                                                <>
                                                    <InsertCodeBlock />
                                                </>
                                            )
                                        }
                                    ]}
                                />
                            </>
                        )
                    })
                ]}
            />
        </div>
    );
};

export default MarkdownEditor;
