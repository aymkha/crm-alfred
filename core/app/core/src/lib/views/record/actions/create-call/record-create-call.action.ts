/**
 * Creates a Call from the current Account (restaurant) without leaving the record page.
 */

import {Injectable} from '@angular/core';
import {ALL_VIEW_MODES, Record} from 'common';
import {HttpClient} from '@angular/common/http';
import {RecordActionData, RecordActionHandler} from '../record.action';
import {MessageService} from '../../../../services/message/message.service';

@Injectable({
    providedIn: 'root'
})
export class RecordCreateCallAction extends RecordActionHandler {

    key = 'create-call-from-account';
    modes = ALL_VIEW_MODES;

    constructor(
        protected http: HttpClient,
        protected message: MessageService,
    ) {
        super();
    }

    run(data: RecordActionData): void {
        const record: Record = data?.store?.recordStore?.getBaseRecord?.() ?? null;
        const id = record?.id ?? null;
        if (!id) {
            this.message.addDangerMessageByKey('LBL_ERROR_PROCESSING_REQUEST');
            return;
        }

        const url = `/legacy/index.php?module=Accounts&action=createActionFromAccount&record=${id}&ajax=1`;
        this.http.get(url).subscribe({
            next: (resp: any) => {
                if (resp && resp.success) {
                    this.message.addSuccessMessageByKey('LBL_ACTION_CREATED_SUCCESS');
                    data?.store?.load?.(false)?.subscribe?.();
                } else {
                    this.message.addDangerMessageByKey('LBL_ERROR_PROCESSING_REQUEST');
                }
            },
            error: () => {
                this.message.addDangerMessageByKey('LBL_ERROR_PROCESSING_REQUEST');
            }
        });
    }

    shouldDisplay(data: RecordActionData): boolean {
        return !!(data?.store?.recordStore?.getBaseRecord?.()?.id);
    }
}
