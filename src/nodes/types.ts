import type { Node, BuiltInNode } from '@xyflow/react';

export type PositionLoggerNode = Node<{ label: string }, 'position-logger'>;
export type AppNode = BuiltInNode | PositionLoggerNode;

export type GeneralNodeData = {
  label: string;
  description?: string;
  tags?: string[];
  comments?: string[];
  onDiscard?: () => void;
  onInvestigate?: () => void;
  onTag?: (tags: string[]) => void;
};

export type GeneralNode = Node<GeneralNodeData, 'general'>;