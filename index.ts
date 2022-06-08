interface ITreeNode<TValue> {
  [x: string]: any;
  left?: ITreeNode<TValue>
  right?: ITreeNode<TValue>
  value: TValue
}

export class Tree<TValue extends number> {
  public root?: ITreeNode<TValue>;

  public insert(value: TValue) {
    if (this.root) {
      this._insert(this.root, value)
    } else {
      this.root = {
        value,
      }
    }
  }

  private _insert(node: ITreeNode<TValue>, value: TValue) {
    const direction = value >= node.value ? 'right' : 'left'
    if (node[direction] !== undefined) this._insert(node[direction]!, value)
    else node[direction] = { value }
  }
}
