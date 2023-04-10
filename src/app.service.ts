import { Injectable } from '@nestjs/common';

export interface IMerge {
  merge(collection_1: number[], collection_2: number[]): number[];
}

@Injectable()
export class AppService implements IMerge {
  merge(collection1: number[], collection2: number[]): number[] {
    const merged: number[] = [];

    // sort merged array
    while (collection1.length && collection2.length) {
      if (collection1[0] < collection2[0]) {
        merged.push(collection1.shift());
      } else {
        merged.push(collection2.shift());
      }
    }

    // fill the rest into merged
    if (collection1.length > collection2.length) {
      merged.push(...collection1);
    } else {
      merged.push(...collection2);
    }

    return merged;
  }
}
