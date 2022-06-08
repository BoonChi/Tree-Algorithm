import { Tree } from './index'

describe("Tree", () => {
  test("should insert root node", () => {
    const treeNode = new Tree();
    treeNode.insert(3)
    expect(treeNode.root).toStrictEqual({ value: 3 });
  });

  test("should insert left subTree", () => {
    const treeNode = new Tree();
    treeNode.insert(3)
    treeNode.insert(1)
    expect(treeNode.root).toStrictEqual({ value: 3, left: { value: 1 } });
  });

  test("should insert left and right subTree", () => {
    const treeNode = new Tree();
    treeNode.insert(3)
    treeNode.insert(1)
    treeNode.insert(5)
    expect(treeNode.root).toStrictEqual({ value: 3, left: { value: 1 }, right: { value: 5 } });
  });

  test("should insert under right sub tree(leaf node)", () => {
    const treeNode = new Tree();
    treeNode.insert(3)
    treeNode.insert(1)
    treeNode.insert(5)
    treeNode.insert(10)
    expect(treeNode.root).toStrictEqual({ value: 3, left: { value: 1 }, right: { value: 5, right: { value: 10 } } });
  });
});