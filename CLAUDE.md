# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a JavaScript/TypeScript algorithms learning repository containing implementations of common data structures and algorithms.

## Commands

- Run tests: `cd test-demo && npm test`
- Run tests in watch mode: `cd test-demo && npm run dev`
- Run tests with UI: `cd test-demo && npm run test:ui`
- Run tests once: `cd test-demo && npm run test:run`

## Architecture

The repository contains standalone JavaScript files organized by topic:

**Data Structures:**
- `LRU.js`, `LFU.js`, `FIFO.js` - Cache eviction algorithms using doubly linked lists
- `doubledLink.js` - Doubly linked list implementation (used by cache algorithms)
- `tree.js` - Binary search tree with insert, delete, search
- `tree-eg.js`, `tree4.js` - Tree traversal (BFS, DFS) and path finding
- `graph.js`, `graph2.js` - Graph algorithms
- `tries.js`, `字典树 tries.js` - Trie data structure
- `queue.js` - Queue implementation
- `链表.js` - Linked list

**Algorithms:**
- `sort.js` - Sorting algorithms (bubble, selection, insertion, shell)
- `sort-gap.js`, `sort.line.js` - Specialized sorting
- `二叉搜索树的最近公共祖先.js` - BST lowest common ancestor
- `验证是否是二叉树.js` - Binary tree validation

**JavaScript Fundamentals:**
- `promise.js`, `fakePromiseAll.js` - Promise implementations
- `fakeSetInterval.js` - setInterval implementation
- `compose.js` - Koa-style middleware composition
- `groupBy.js` - Array grouping utility
- `obj-get-value.js`, `递归字符串 a.b.c 生成对象.js` - Object property access

**Patterns & Implementations:**
- `myvue/` - Vue-like reactivity system (Observer, HTML parser, mini Vue3)
- `miniReact.js` - React-like implementation
- `setState.js` - State management pattern
- `limitParallelAsync.js`, `任务可中断可继续.js` - Async control patterns

**Test Structure:**
Tests use Vitest and are located in `test-demo/src/`.
