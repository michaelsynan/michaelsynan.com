import type { TransformContentOptions } from '../types';
/**
 * Parse content file using registered plugins
 */
export declare function transformContent(id: string, content: string, options?: TransformContentOptions): Promise<import("../types").ParsedContent | {
    _id: string;
    body: string;
}>;
export { defineTransformer } from './utils';
