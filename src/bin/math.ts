import {
    atan2,
    chain,
    derivative,
    e,
    evaluate,
    log,
    pi,
    pow,
    round,
    sqrt,
    parse,
    cos
  } from 'mathjs';
  import { println } from '../utils/utils';
// const parser = math.parser();

const math = {
    x: 0,
    y: 0,
    z: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    a: 0,
    b: 0,
    c: 0,
    d: 0,
};

export const evl = async (args: string[]) => {
    if (args.length === 0) {
        return `Usage: eval [arg]
    
    Args:
    
    - expression: expression to evaluate
    
    Example:
    
    evl 2 + 2 # to evaluate the expression 2 + 2
    evl 2 inch to cm
    evl x = 2 * pi
    evl sin(x)
    `;

    }

    const expression = args.join(' ');

    println(evaluate(expression, math).toString());

    };

export const der = async (args: string[]) => {
    if (args.length === 0) {
        return `Usage: der [arg]
    
    Args:
    
    - expression: expression to evaluate
    
    Example:
    
    der 2x # to evaluate the derivative of 2x`;
    }

    const expression = args.join(' ');

    println(derivative(expression, 'x').toString());

    };

export const tex = async (args: string[]) => {
    if (args.length === 0) {
        return `Usage: tex [arg]
    
    Args:
    
    - expression: expression to convert to tex format
    
    Example:
    
    tex 2x `;
    }

    const expression = args.join(' ');

    println(parse(expression).toTex());

    };
