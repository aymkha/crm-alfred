import { HttpClient } from '@angular/common/http';
import { RecordActionData, RecordActionHandler } from '../record.action';
import { MessageService } from '../../../../services/message/message.service';
import * as i0 from "@angular/core";
export declare class RecordCreateCallAction extends RecordActionHandler {
    protected http: HttpClient;
    protected message: MessageService;
    key: string;
    modes: import("common").ViewMode[];
    constructor(http: HttpClient, message: MessageService);
    run(data: RecordActionData): void;
    shouldDisplay(data: RecordActionData): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecordCreateCallAction, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecordCreateCallAction>;
}
