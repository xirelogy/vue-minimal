interface RendererNode {
  [key: string]: any;
}

interface RendererElement extends RendererNode { }

type VNodeTypes = string | VNode | any;

type VNodeProps = { }


/**
 * Suppose to be compatible to vue's VNode
 */
export interface VNode<HostNode = RendererNode, HostElement = RendererElement, ExtraProps = {
  [key: string]: any;
}> {
  type: VNodeTypes,
  props: (VNodeProps & ExtraProps) | null;
  key: string | number | symbol | null;
  el: HostNode | null;
  anchor: HostNode | null;
  target: HostElement | null;
}