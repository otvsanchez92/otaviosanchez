import React from 'react';

export interface Props {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'default' | 'alert' | 'outline' | 'transparent';
    theme?: unknown;
}
