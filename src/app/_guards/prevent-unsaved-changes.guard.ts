import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EditTourComponent } from '../admin-panel/admin-main/tours/edit-tour/edit-tour.component';


@Injectable()

export class PreventUnsavedChanges implements CanDeactivate<EditTourComponent> {
    canDeactivate(component: EditTourComponent) {
        if (component.editForm.dirty) {
            return confirm('Are You Sure You Want To Continue ? Any Unsaved Changes Will be Lost!');
        }
        return true;
    }
}
