type ITreeNode<TValue> = {
  left?: ITreeNode<TValue>
  right?: ITreeNode<TValue>
  value: TValue
}

export class Tree<TValue extends number> {
  public root?: ITreeNode<TValue>

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
    if (node[direction] !== undefined) this._insert(node[direction]!, value) // eslint-disable-line @typescript-eslint/no-non-null-assertion
    else node[direction] = { value }
  }
}
