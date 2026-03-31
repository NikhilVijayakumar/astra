import { default as React } from 'react';
import { LucideIcon } from 'lucide-react';
export interface WorkflowStepData {
    id: string;
    label: string;
    description: string;
    Icon: LucideIcon;
}
export interface WorkflowPhase {
    titleKey: string;
    steps: WorkflowStepData[];
}
interface MultiPhaseWorkflowDiagramProps {
    flows: WorkflowPhase[];
    activeStepId: string | null;
    onStepChange: (id: string) => void;
    t: (key: string) => string;
}
export declare const MultiPhaseWorkflowDiagram: React.FC<MultiPhaseWorkflowDiagramProps>;
export {};
