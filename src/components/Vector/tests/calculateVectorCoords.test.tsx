import { calculateVectorCoords } from '../calculateVectorCoords';

describe('CalcualteVectorCoords', () => {
  const fromNode = {
    size: { height: 100, width: 200 },
    position: { x: 20, y: 20 },
  };
  it('returns values correctly when fromNode is fully above and to the right of toNode', () => {
    const toNode = {
      size: { height: 100, width: 200 },
      position: { x: 400, y: 200 },
    };

    expect(
      calculateVectorCoords(
        fromNode.position,
        fromNode.size,
        toNode.position,
        toNode.size,
      ),
    ).toEqual({
      x0: 120,
      y0: 120,
      x1: 500,
      y1: 200,
      orientation: 'v',
    });
  });

  it('returns values correctly when fromNode is fully above and to the left of fromNode', () => {
    const toNode = {
      size: { height: 100, width: 200 },
      position: { x: -250, y: 200 },
    };

    expect(
      calculateVectorCoords(
        fromNode.position,
        fromNode.size,
        toNode.position,
        toNode.size,
      ),
    ).toEqual({
      x0: 120,
      y0: 120,
      x1: -150,
      y1: 200,
      orientation: 'v',
    });
  });

  it('returns values correctly when fromNode is NOT fully above and to the right of fromNode', () => {
    const toNode = {
      size: { height: 100, width: 200 },
      position: { x: 400, y: 120 },
    };

    expect(
      calculateVectorCoords(
        fromNode.position,
        fromNode.size,
        toNode.position,
        toNode.size,
      ),
    ).toEqual({
      x0: 220,
      y0: 70,
      x1: 400,
      y1: 170,
      orientation: 'h',
    });
  });

  it('returns values correctly when fromNode is at the same height as the fromNode and to the right', () => {
    const toNode = {
      size: { height: 100, width: 200 },
      position: { x: 400, y: 20 },
    };

    expect(
      calculateVectorCoords(
        fromNode.position,
        fromNode.size,
        toNode.position,
        toNode.size,
      ),
    ).toEqual({
      x0: 220,
      y0: 70,
      x1: 400,
      y1: 70,
      orientation: 'h',
    });
  });

  it('returns values correctly when fromNode is at the same height as the fromNode and to the left', () => {
    const toNode = {
      size: { height: 100, width: 200 },
      position: { x: -300, y: 20 },
    };

    expect(
      calculateVectorCoords(
        fromNode.position,
        fromNode.size,
        toNode.position,
        toNode.size,
      ),
    ).toEqual({
      x0: 20,
      y0: 70,
      x1: -100,
      y1: 70,
      orientation: 'h',
    });
  });

  it('returns values correctly when toNode is NOT fully above the fromNode and to the right', () => {
    const toNode = {
      size: { height: 100, width: 200 },
      position: { x: 400, y: 0 },
    };

    expect(
      calculateVectorCoords(
        fromNode.position,
        fromNode.size,
        toNode.position,
        toNode.size,
      ),
    ).toEqual({
      x0: 220,
      y0: 70,
      x1: 400,
      y1: 50,
      orientation: 'h',
    });
  });

  it('returns values correctly when toNode is NOT fully above the fromNode and to the left', () => {
    const toNode = {
      size: { height: 100, width: 200 },
      position: { x: -300, y: 0 },
    };

    expect(
      calculateVectorCoords(
        fromNode.position,
        fromNode.size,
        toNode.position,
        toNode.size,
      ),
    ).toEqual({
      x0: 20,
      y0: 70,
      x1: -100,
      y1: 50,
      orientation: 'h',
    });
  });

  it('returns values correctly when toNode is fully above the fromNode and to the right', () => {
    const toNode = {
      size: { height: 100, width: 200 },
      position: { x: 400, y: -150 },
    };

    expect(
      calculateVectorCoords(
        fromNode.position,
        fromNode.size,
        toNode.position,
        toNode.size,
      ),
    ).toEqual({
      x0: 120,
      y0: 20,
      x1: 500,
      y1: -50,
      orientation: 'v',
    });
  });

  it('returns values correctly when toNode is fully above the fromNode and to the left', () => {
    const toNode = {
      size: { height: 100, width: 200 },
      position: { x: 0, y: -150 },
    };

    expect(
      calculateVectorCoords(
        fromNode.position,
        fromNode.size,
        toNode.position,
        toNode.size,
      ),
    ).toEqual({
      x0: 120,
      y0: 20,
      x1: 100,
      y1: -50,
      orientation: 'v',
    });
  });
});
