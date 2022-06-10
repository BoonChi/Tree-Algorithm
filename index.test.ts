import { Tree } from './index';

describe('Tree', () => {
  describe('insert', () => {
    test('should insert root node', () => {
      const treeNode = new Tree();
      treeNode.insert(3);
      expect(treeNode.root).toStrictEqual({ value: 3 });
    });

    test('should insert left subTree', () => {
      const treeNode = new Tree();
      treeNode.insert(3);
      treeNode.insert(1);
      expect(treeNode.root).toStrictEqual({ value: 3, left: { value: 1 } });
    });

    test('should insert left and right subTree', () => {
      const treeNode = new Tree();
      treeNode.insert(3);
      treeNode.insert(1);
      treeNode.insert(5);
      expect(treeNode.root).toStrictEqual({
        value: 3,
        left: { value: 1 },
        right: { value: 5 },
      });
    });

    test('should insert under right sub tree(leaf node)', () => {
      const treeNode = new Tree();
      treeNode.insert(3);
      treeNode.insert(1);
      treeNode.insert(5);
      treeNode.insert(10);
      expect(treeNode.root).toStrictEqual({
        value: 3,
        left: { value: 1 },
        right: { value: 5, right: { value: 10 } },
      });
    });

    test('should able to insert complicated tree', () => {
      const treeNode = new Tree();
      treeNode.insert(5);
      treeNode.insert(10);
      treeNode.insert(8);
      treeNode.insert(7);
      treeNode.insert(9);
      treeNode.insert(12);
      treeNode.insert(11);
      treeNode.insert(13);
      expect(treeNode.root).toStrictEqual({
        value: 5,
        right: {
          value: 10,
          left: {
            value: 8,
            left: {
              value: 7,
            },
            right: {
              value: 9,
            },
          },
          right: {
            value: 12,
            left: {
              value: 11,
            },
            right: {
              value: 13,
            },
          },
        },
      });
    });
  });
  describe('remove', () => {
    describe('return false', () => {
      test('if no next node', () => {
        const treeNode = new Tree();
        treeNode.insert(5);
        expect(treeNode.remove(10)).toBe(false);
      });
    });
    describe('PASS', () => {
      test('should NOT able to remove node if tree is NOT existing', () => {
        const treeNode = new Tree();
        expect(treeNode.remove(3)).toBe(false);
      });

      test('should able to remove root node', () => {
        const treeNode = new Tree();
        treeNode.insert(5);
        treeNode.insert(10);
        treeNode.remove(5);
        expect(treeNode.root).toBe(undefined);
      });

      test('should able to remove parent node', () => {
        const treeNode = new Tree();
        treeNode.insert(5);
        treeNode.insert(10);
        treeNode.remove(10);
        expect(treeNode.root).toStrictEqual({ value: 5 });
      });

      test('should able to remove parent node', () => {
        const treeNode = new Tree();
        treeNode.insert(5);
        treeNode.insert(10);
        treeNode.remove(10);
        expect(treeNode.root).toStrictEqual({
          value: 5,
        });
      });

      test('should able to remove parent node only without delete other node', () => {
        const treeNode = new Tree();
        treeNode.insert(5);
        treeNode.insert(10);
        treeNode.insert(20);
        treeNode.remove(10);
        expect(treeNode.root).toStrictEqual({
          value: 5,
          right: {
            value: 20,
            right: undefined,
            left: undefined,
          },
        });
      });

      test('should able to remove node only without delete the child node and parent node', () => {
        const treeNode = new Tree();
        treeNode.insert(5);
        treeNode.insert(10);
        treeNode.insert(20);
        treeNode.insert(30);
        treeNode.remove(20);
        expect(treeNode.root).toStrictEqual({
          value: 5,
          right: {
            value: 10,
            right: {
              value: 30,
              right: undefined,
              left: undefined,
            },
          },
        });
      });

      test('should able to remove node only without delete the child node and parent node', () => {
        const treeNode = new Tree();
        treeNode.insert(5);
        treeNode.insert(10);
        treeNode.insert(8);
        treeNode.insert(7);
        treeNode.insert(9);
        treeNode.remove(10);
        expect(treeNode.root).toStrictEqual({
          value: 5,
          right: {
            value: 8,
            left: {
              value: 7,
            },
            right: {
              value: 9,
            },
          },
        });
      });

      test('should able to remove node only without delete the child node and parent node', () => {
        const treeNode = new Tree();
        treeNode.insert(5);
        treeNode.insert(10);
        treeNode.insert(3);
        treeNode.insert(2);
        treeNode.remove(3);
        expect(treeNode.root).toStrictEqual({
          value: 5,
          right: { value: 10 },
          left: { value: 2, left: undefined, right: undefined },
        });
      });

      test('should able to remove node only without delete the child node and parent node', () => {
        const treeNode = new Tree();
        treeNode.insert(5);
        treeNode.insert(10);
        treeNode.insert(8);
        treeNode.insert(7);
        treeNode.insert(9);
        treeNode.insert(12);
        treeNode.insert(11);
        treeNode.insert(13);
        treeNode.remove(10);
        expect(treeNode.root).toStrictEqual({
          value: 5,
          right: {
            value: 8,
            left: {
              value: 7,
            },
            right: {
              value: 9,
              right: {
                value: 12,
                left: {
                  value: 11,
                },
                right: {
                  value: 13,
                },
              },
            },
          },
        });
      });
    });
  });
});
