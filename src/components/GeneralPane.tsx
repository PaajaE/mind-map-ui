import React, { useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import { GeneralNodeData } from '../nodes/types';

interface GeneralPaneProps {
  data: GeneralNodeData;
}

const GeneralPane: React.FC<GeneralPaneProps> = ({ data }) => {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment && data.comments) {
      data.comments.push(newComment);
      setNewComment('');
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md p-3 w-[400px] h-[300px] flex flex-col justify-between">
      {/* Header */}
      <div className="flex justify-between items-center bg-orange-100 p-2 rounded-lg">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-orange-500 rounded-md text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="9" r="7"></circle>
              <circle cx="15" cy="15" r="7"></circle>
            </svg>
          </div>
          <h3 className="text-sm font-bold text-orange-900 truncate">{data.label}</h3>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-orange-800">Loop Mode</span>
          <input type="checkbox" className="w-4 h-4 rounded border-orange-800" />
        </div>
      </div>

      {/* Body */}
      <div className="mt-2">
        <p className="text-xs text-gray-600 truncate">{data.description}</p>

        {/* Tags Section */}
        {data.tags && (
          <div className="mt-2">
            <h4 className="text-xs font-medium text-gray-800">Tags:</h4>
            <div className="flex gap-1 flex-wrap mt-1">
              {data.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-md shadow"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Comments Section */}
        <div className="mt-2">
          <h4 className="text-xs font-medium text-gray-800">Comments:</h4>
          <ul className="space-y-1 mt-1">
            {data.comments?.map((comment, index) => (
              <li key={index} className="bg-gray-100 text-gray-700 text-xs p-1 rounded-md shadow truncate">
                {comment}
              </li>
            ))}
          </ul>
          <div className="mt-2 flex items-center gap-1">
            <input
              type="text"
              placeholder="Add a comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 text-xs w-full focus:ring-2 focus:ring-orange-500"
            />
            <button
              onClick={handleAddComment}
              className="bg-green-500 text-white px-2 py-1 rounded-md text-xs hover:bg-green-600"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-2">
        <button
          onClick={data.onDiscard}
          className="bg-red-500 text-white px-2 py-1 rounded-md text-xs hover:bg-red-600 w-full"
        >
          Discard
        </button>
        <button
          onClick={data.onInvestigate}
          className="bg-green-500 text-white px-2 py-1 rounded-md text-xs hover:bg-green-600 w-full"
        >
          Investigate
        </button>
      </div>

      {/* Input/Output Handles */}
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-white border-2 border-gray-500 rounded-full"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 bg-white border-2 border-gray-500 rounded-full"
      />
    </div>
  );
};

export default GeneralPane;