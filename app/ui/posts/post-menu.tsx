'use client'
import { memo, useState } from 'react';
import { deleteCommentAction } from './actions';

const PostMenu = memo(({ spaceId, postId }: {
    spaceId: number,
    postId: number,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Post options"
            >
                <svg className="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
            </button>
            
            {isOpen && (
                <div className="absolute right-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-100 z-10">
                    <button
                        onClick={async () => {
                            await deleteCommentAction(spaceId, postId);
                            setIsOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
                    >
                        Delete Post
                    </button>
                </div>
            )}
        </div>
    );
});

PostMenu.displayName = 'PostMenu';

export default PostMenu;