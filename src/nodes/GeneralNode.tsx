// General Node Component for Mind-Map System with TypeScript

// src/components/GeneralNode.tsx
import React, { useState } from 'react';
import { Handle, Position } from '@xyflow/react';
import { GeneralNodeData } from './types';

interface GeneralNodeProps {
  data: GeneralNodeData;
}

const GeneralNode: React.FC<GeneralNodeProps> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newComment, setNewComment] = useState('');

  const handleExpandCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAddComment = () => {
    if (newComment && data.comments) {
      data.comments.push(newComment);
      setNewComment('');
    }
  };

  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-md w-56">
      <Handle type="target" position={Position.Top} />

      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg">{data.label}</h3>
        <button
          className="text-gray-600 font-bold text-xl focus:outline-none"
          onClick={handleExpandCollapse}
        >
          {isExpanded ? '-' : '+'}
        </button>
      </div>

      {isExpanded && (
        <div className="mt-4 text-sm">
          <p className="text-gray-700">{data.description}</p>

          {/* Tags Section */}
          {data.tags && (
            <div className="flex flex-wrap gap-2 mt-2">
              {data.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-500 text-white text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Comments Section */}
          <div className="mt-4">
            <ul className="list-none space-y-2">
              {data.comments?.map((comment, index) => (
                <li key={index} className="text-gray-600">
                  {comment}
                </li>
              ))}
            </ul>
            <div className="mt-2 flex space-x-2">
              <input
                type="text"
                className="border border-gray-300 rounded px-2 py-1 w-full focus:outline-blue-500"
                placeholder="Add a comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button
                className="bg-green-500 text-white px-4 py-1 rounded"
                onClick={handleAddComment}
              >
                Add
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between mt-4">
            <button
              onClick={data.onDiscard}
              className="bg-red-500 text-white px-4 py-1 rounded"
            >
              Discard
            </button>
            <button
              onClick={data.onInvestigate}
              className="bg-green-500 text-white px-4 py-1 rounded"
            >
              Investigate
            </button>
          </div>
        </div>
      )}

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default GeneralNode;
