import React, { useState } from 'react';
import {
  ReactFlow,
  Controls,
  addEdge,
  Connection,
  Edge,
  NodeChange,
  EdgeChange,
  applyNodeChanges,
  applyEdgeChanges,
} from '@xyflow/react';
import GeneralPane from './components/GeneralPane';
import '@xyflow/react/dist/style.css';
import type { GeneralNode } from './nodes/types'; // Adjust the path to match your project structure

const allNodes: GeneralNode[] = [
  {
    id: '1',
    type: 'general',
    position: { x: 0, y: 100 },
    data: {
      label: 'Eryndor',
      description: 'A mysterious region.',
      tags: ['Magic'],
      comments: [],
    },
  },
  {
    id: '2',
    type: 'general',
    position: { x: 500, y: 100 },
    data: {
      label: 'Lindûriel',
      description: 'Land of the Elves.',
      tags: ['Elves'],
      comments: [],
    },
  },
  {
    id: '3',
    type: 'general',
    position: { x: 0, y: 500 },
    data: {
      label: 'Falascar',
      description: 'A coastal area.',
      tags: ['Coast'],
      comments: [],
    },
  },
  {
    id: '4',
    type: 'general',
    position: { x: 500, y: 500 },
    data: {
      label: 'Thalindor',
      description: 'A fortress city.',
      tags: ['Fortress'],
      comments: [],
    },
  },
  {
    id: '5',
    type: 'general',
    position: { x: 250, y: 900 },
    data: {
      label: 'Caermaril',
      description: 'The heart of trade.',
      tags: ['Trade'],
      comments: [],
    },
  },
];

const nodeTypes = {
  general: GeneralPane,
};

const App: React.FC = () => {
  const [nodes, setNodes] = useState<GeneralNode[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const onNodesChange = (changes: NodeChange[]) => {
    setNodes((nds) => applyNodeChanges(changes, nds as GeneralNode[]));
  };

  const onEdgesChange = (changes: EdgeChange[]) => {
    setEdges((eds) => applyEdgeChanges(changes, eds));
  };

  const onConnect = (connection: Connection) => {
    setEdges((eds) => addEdge(connection, eds));
  };

  const handleGenerate = () => {
    setNodes(allNodes);
    setEdges([]); // Reset edges when nodes are regenerated
  };

  return (
    <div className="h-screen w-full">
      <button
        onClick={handleGenerate}
        style={{
          position: 'absolute',
          zIndex: 10,
          top: 10,
          left: 10,
          padding: '10px 20px',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Generate
      </button>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        style={{ background: '#f0f4f8' }}
      >
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default App;