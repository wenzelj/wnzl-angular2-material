
import {Injectable} from '@angular/core';
import {ToastsManager} from 'ng2-toastr/ng2-toastr'

@Injectable()
export class  MessageService{
    constructor(public toastr: ToastsManager){
    }

    complete(message: string, loading: boolean) {
        loading = false;
        console.log(message);
        this.showSuccess(message)
    }

    showSuccess(message: string) {
        console.log(message);
        this.toastr.success(message, 'Success!');
    }

    showError(message: string) {
        console.log(message);
        this.toastr.error(message, 'Oops!');
    }

    showWarning(message: string){
        this.toastr.warning(message, 'Alert!');
    }

}