import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

type Payload = {
  accountId: string;
  accountName?: string;
  actionValue: string;
  nextActionDate: string; // attendu: YYYY-MM-DD (ou format date)
};

@Injectable({ providedIn: 'root' })
export class CreateActionFromAccountService {
  constructor(private http: HttpClient) {}

  private toDateStart(nextActionDate: string): string {
    // Si tu stockes juste une date (YYYY-MM-DD), on force une heure (10:00:00)
    // SuiteCRM attend souvent un datetime. Ajuste si tu as déjà un datetime.
    if (nextActionDate?.includes('T')) return nextActionDate;
    return `${nextActionDate}T10:00:00`;
  }

  async createCallFromAccount(p: Payload): Promise<void> {
    const dateStart = this.toDateStart(p.nextActionDate);

    const body = {
      data: {
        type: 'Calls',
        attributes: {
          name: p.actionValue,
          date_start: dateStart,
          parent_type: 'Accounts',
          parent_id: p.accountId,
        },
      },
    };

    // API V8 endpoint (création module)
    const url = `/legacy/Api/V8/module`; // backend OK, UI #/ uniquement

    await this.http
      .post(url, body, {
        headers: new HttpHeaders({
          'Content-Type': 'application/vnd.api+json',
          'Accept': 'application/vnd.api+json',
        }),
      })
      .toPromise();
  }
}
 
