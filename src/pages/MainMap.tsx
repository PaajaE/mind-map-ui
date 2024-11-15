import React from 'react';
import { ReactFlow, Controls, Node, Edge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

type NodeData = {
  label: string;
};

type NodeType = Node<NodeData>;
type EdgeType = Edge;

const initialNodes: NodeType[] = [
  { id: '1', position: { x: 250, y: 5 }, data: { label: 'Idea 1' } },
  { id: '2', position: { x: 100, y: 100 }, data: { label: 'Idea 2' } },
];

const initialEdges: EdgeType[] = [
  { id: 'e1-2', source: '1', target: '2' },
];

const MainMap: React.FC = () => (
  <div style={{ height: '100vh', width: '100%' }}>
    <ReactFlow nodes={initialNodes} edges={initialEdges}>
      <Controls />
    </ReactFlow>
  </div>
);

export default MainMap;
