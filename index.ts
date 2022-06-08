type ITreeNode<TValue> = {
  left?: ITreeNode<TValue>;
  right?: ITreeNode<TValue>;
  value: TValue;
};

export class Tree<TValue extends number> {
  public root?: ITreeNode<TValue>;

  public insert(value: TValue) {
    if (this.root) {
      this._insert(this.root, value);
    } else {
      this.root = {
        value,
      };
    }
  }

  private _insert(node: ITreeNode<TValue>, value: TValue) {
    const direction = this._getDirection(node, value);
    const nextNode = node[direction];
    if (nextNode) this._insert(nextNode, value);
    else node[direction] = { value };
  }

  private _getDirection(node: ITreeNode<TValue>, value: TValue) {
    return value >= node.value ? 'right' : 'left';
  }

  public remove(value: TValue): boolean {
    if (!this.root) return false;
    if (value === this.root.value) {
      this.root = undefined;
      return true;
    } else {
      return this._remove(this.root, value);
    }
  }

  private _remove(node: ITreeNode<TValue>, value: TValue): boolean {
    const direction = this._getDirection(node, value);
    const nextNode = node[direction];

    if (!nextNode) {
      return false;
    }

    if (nextNode.value !== value) return this._remove(nextNode, value);

    if (nextNode.left && nextNode.right && nextNode.left.right) {
      node[direction] = {
        value: nextNode.left.value,
        left: nextNode.left.left,
        right: {
          value: nextNode.left.right.value,
          right: {
            value: nextNode.right.value,
            left: nextNode.right.left,
            right: nextNode.right.right,
          },
        },
      };
      return true;
    } else if (nextNode.left) {
      node[direction] = {
        value: nextNode.left.value,
        left: nextNode.left.left,
        right: nextNode.left.right,
      };
      return true;
    } else if (nextNode.right) {
      node[direction] = {
        value: nextNode.right.value,
        left: nextNode.right.left,
        right: nextNode.right.right,
      };
      return true;
    } else {
      delete node[direction];
      return true;
    }
  }
}
