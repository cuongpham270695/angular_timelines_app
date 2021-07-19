import { Injectable } from '@angular/core';
import {addMonths, addYears, differenceInDays, differenceInMonths, differenceInYears} from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  constructor() { }

  // @ts-ignore
  getDiffToNow(diff: string | number | Date): string {
    const result: string[] = [];
    const now = new Date();
    diff = new Date(diff);
    const years = differenceInYears(now,diff);
    // @ts-ignore
    if (years > 0){
      result.push(`${years} years`);
      // @ts-ignore
      diff = addYears(diff,years);
    }

    const months = differenceInMonths(now,diff);
    result.push(`${months} months`);
    // @ts-ignore
    if (months>0){
      diff = addMonths(diff,months);
    }

    const days = differenceInDays(now, diff);
    // @ts-ignore
    if (days > 0) {
      result.push(`${days} days`);
    }

    return result.join(' ');
  }
}
