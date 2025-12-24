/**
 * SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.
 * Copyright (C) 2021 SalesAgility Ltd.
 *
 * This program is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License version 3 as published by the
 * Free Software Foundation with the addition of the following permission added
 * to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK
 * IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE
 * WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * In accordance with Section 7(b) of the GNU Affero General Public License
 * version 3, these Appropriate Legal Notices must retain the display of the
 * "Supercharged by SuiteCRM" logo. If the display of the logos is not reasonably
 * feasible for technical reasons, the Appropriate Legal Notices must display
 * the words "Supercharged by SuiteCRM".
 */
import { Component, Input, signal, } from '@angular/core';
import { filter, map, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../store/theme-images/theme-images.store";
import * as i2 from "@angular/common";
import * as i3 from "angular-svg-icon";
function ImageComponent_ng_container_0_svg_icon_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "svg-icon", 3);
} if (rf & 2) {
    const img_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r2.wrapperClass);
    i0.ɵɵpropertyInterpolate("name", img_r1.name);
    i0.ɵɵproperty("svgClass", ctx_r2.klass || "")("title", ctx_r2.title || "");
} }
function ImageComponent_ng_container_0_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 4);
} if (rf & 2) {
    const img_r1 = i0.ɵɵnextContext().ngIf;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r3.klass);
    i0.ɵɵpropertyInterpolate("src", img_r1.path, i0.ɵɵsanitizeUrl);
    i0.ɵɵproperty("title", ctx_r3.title || "");
} }
function ImageComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ImageComponent_ng_container_0_svg_icon_1_Template, 1, 6, "svg-icon", 1);
    i0.ɵɵtemplate(2, ImageComponent_ng_container_0_img_2_Template, 1, 5, "img", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const img_r1 = ctx.ngIf;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", img_r1.type === "svg");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", img_r1.type !== "svg");
} }
class ImageComponent {
    themeImagesStore;
    image;
    klass = '';
    title = '';
    wrapperClass = 'sicon';
    images$ = this.themeImagesStore.images$;
    imageSig = signal({});
    subs = [];
    constructor(themeImagesStore) {
        this.themeImagesStore = themeImagesStore;
    }
    ngOnInit() {
        this.subs = [];
        this.subs.push(this.images$.pipe(filter(img => img !== null), map((images) => ({ images })), tap(data => this.getImage(data, this.image))).subscribe());
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.subs = [];
    }
    /**
     * Get image from current view model and log if not existent
     *
     * @param vm
     * @param image name
     * @returns ThemeImage
     */
    getImage(vm, image) {
        if (!vm || !vm.images || Object.keys(vm.images).length < 1) {
            return null;
        }
        this.imageSig.update(() => vm.images[image]);
        if (!this.imageSig()) {
            console.warn(`Image with name '${image}' not found`);
        }
    }
    static ɵfac = function ImageComponent_Factory(t) { return new (t || ImageComponent)(i0.ɵɵdirectiveInject(i1.ThemeImagesStore)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ImageComponent, selectors: [["scrm-image"]], inputs: { image: "image", klass: "klass", title: "title", wrapperClass: "wrapperClass" }, decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "svgClass", "title", "class", "name", 4, "ngIf"], ["alt", "", 3, "src", "class", "title", 4, "ngIf"], [3, "svgClass", "title", "name"], ["alt", "", 3, "src", "title"]], template: function ImageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ImageComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.imageSig());
        } }, dependencies: [i2.NgIf, i3.SvgIconComponent], encapsulation: 2 });
}
export { ImageComponent };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ImageComponent, [{
        type: Component,
        args: [{ selector: 'scrm-image', template: "<! --\n/**\n* SuiteCRM is a customer relationship management program developed by SalesAgility Ltd.\n* Copyright (C) 2021 SalesAgility Ltd.\n*\n* This program is free software; you can redistribute it and/or modify it under\n* the terms of the GNU Affero General Public License version 3 as published by the\n* Free Software Foundation with the addition of the following permission added\n* to Section 15 as permitted in Section 7(a): FOR ANY PART OF THE COVERED WORK\n* IN WHICH THE COPYRIGHT IS OWNED BY SALESAGILITY, SALESAGILITY DISCLAIMS THE\n* WARRANTY OF NON INFRINGEMENT OF THIRD PARTY RIGHTS.\n*\n* This program is distributed in the hope that it will be useful, but WITHOUT\n* ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS\n* FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more\n* details.\n*\n* You should have received a copy of the GNU Affero General Public License\n* along with this program.  If not, see http://www.gnu.org/licenses.\n*\n* In accordance with Section 7(b) of the GNU Affero General Public License\n* version 3, these Appropriate Legal Notices must retain the display of the\n* \"Supercharged by SuiteCRM\" logo. If the display of the logos is not reasonably\n* feasible for technical reasons, the Appropriate Legal Notices must display\n* the words \"Supercharged by SuiteCRM\".\n*/\n-->\n<ng-container *ngIf=\"imageSig() as img\">\n\n    <svg-icon *ngIf=\"img.type === 'svg'\" [svgClass]=\"klass || ''\" [title]=\"title || ''\" class=\"{{wrapperClass}}\"\n              name=\"{{img.name}}\"></svg-icon>\n\n    <img *ngIf=\"img.type !=='svg'\" alt=\"\" src=\"{{img.path}}\" class=\"{{klass}}\" [title]=\"title || ''\">\n\n</ng-container>\n" }]
    }], function () { return [{ type: i1.ThemeImagesStore }]; }, { image: [{
            type: Input
        }], klass: [{
            type: Input
        }], title: [{
            type: Input
        }], wrapperClass: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29yZS9zcmMvbGliL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRztBQUVILE9BQU8sRUFDSCxTQUFTLEVBQ1QsS0FBSyxFQUdMLE1BQU0sR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0lDTDVDLDhCQUN5Qzs7OztJQUQyQyxrQ0FBd0I7SUFDbEcsNkNBQW1CO0lBRFEsNkNBQXdCLDZCQUFBOzs7SUFHN0QseUJBQWlHOzs7O0lBQXhDLDJCQUFpQjtJQUFwQyw4REFBa0I7SUFBbUIsMENBQXFCOzs7SUFMcEcsNkJBQXdDO0lBRXBDLHdGQUN5QztJQUV6Qyw4RUFBaUc7SUFFckcsMEJBQWU7OztJQUxBLGVBQXdCO0lBQXhCLDRDQUF3QjtJQUc3QixlQUF1QjtJQUF2Qiw0Q0FBdUI7O0FES2pDLE1BS2EsY0FBYztJQVlEO0lBWGIsS0FBSyxDQUFTO0lBQ2QsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNYLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDWCxZQUFZLEdBQUcsT0FBTyxDQUFDO0lBRWhDLE9BQU8sR0FBOEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztJQUVuRSxRQUFRLEdBQUcsTUFBTSxDQUFNLEVBQUUsQ0FBQyxDQUFDO0lBRWpCLElBQUksR0FBbUIsRUFBRSxDQUFDO0lBRXBDLFlBQXNCLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQ3hELENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDNUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxFQUMzQixHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLEVBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUMvQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxRQUFRLENBQUMsRUFBNkIsRUFBRSxLQUFhO1FBQ2pELElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDeEQsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEtBQUssYUFBYSxDQUFDLENBQUM7U0FDeEQ7SUFDTCxDQUFDO3dFQTlDUSxjQUFjOzZEQUFkLGNBQWM7WUNmM0IsaUZBT2U7O1lBUEEscUNBQWlCOzs7U0RlbkIsY0FBYzt1RkFBZCxjQUFjO2NBTDFCLFNBQVM7MkJBQ0ksWUFBWTttRUFLYixLQUFLO2tCQUFiLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5pbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBJbnB1dCxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT25Jbml0LFxuICAgIHNpZ25hbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge09ic2VydmFibGUsIFN1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2ZpbHRlciwgbWFwLCB0YXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7VGhlbWVJbWFnZSwgVGhlbWVJbWFnZU1hcCwgVGhlbWVJbWFnZXNTdG9yZX0gZnJvbSAnLi4vLi4vc3RvcmUvdGhlbWUtaW1hZ2VzL3RoZW1lLWltYWdlcy5zdG9yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2NybS1pbWFnZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlQ29tcG9uZW50ICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSBpbWFnZTogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGtsYXNzID0gJyc7XG4gICAgQElucHV0KCkgdGl0bGUgPSAnJztcbiAgICBASW5wdXQoKSB3cmFwcGVyQ2xhc3MgPSAnc2ljb24nO1xuXG4gICAgaW1hZ2VzJDogT2JzZXJ2YWJsZTxUaGVtZUltYWdlTWFwPiA9IHRoaXMudGhlbWVJbWFnZXNTdG9yZS5pbWFnZXMkO1xuXG4gICAgaW1hZ2VTaWcgPSBzaWduYWw8YW55Pih7fSk7XG5cbiAgICBwcm90ZWN0ZWQgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0aGVtZUltYWdlc1N0b3JlOiBUaGVtZUltYWdlc1N0b3JlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3VicyA9IFtdO1xuICAgICAgICB0aGlzLnN1YnMucHVzaCh0aGlzLmltYWdlcyQucGlwZShcbiAgICAgICAgICAgIGZpbHRlcihpbWcgPT4gaW1nICE9PSBudWxsKSxcbiAgICAgICAgICAgIG1hcCgoaW1hZ2VzKSA9PiAoe2ltYWdlc30pKSxcbiAgICAgICAgICAgIHRhcChkYXRhID0+IHRoaXMuZ2V0SW1hZ2UoZGF0YSwgdGhpcy5pbWFnZSkpLFxuICAgICAgICApLnN1YnNjcmliZSgpKTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzLmZvckVhY2goc3ViID0+IHN1Yi51bnN1YnNjcmliZSgpKTtcbiAgICAgICAgdGhpcy5zdWJzID0gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGltYWdlIGZyb20gY3VycmVudCB2aWV3IG1vZGVsIGFuZCBsb2cgaWYgbm90IGV4aXN0ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdm1cbiAgICAgKiBAcGFyYW0gaW1hZ2UgbmFtZVxuICAgICAqIEByZXR1cm5zIFRoZW1lSW1hZ2VcbiAgICAgKi9cbiAgICBnZXRJbWFnZSh2bTogeyBpbWFnZXM6IFRoZW1lSW1hZ2VNYXAgfSwgaW1hZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAoIXZtIHx8ICF2bS5pbWFnZXMgfHwgT2JqZWN0LmtleXModm0uaW1hZ2VzKS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW1hZ2VTaWcudXBkYXRlKCgpID0+IHZtLmltYWdlc1tpbWFnZV0pO1xuXG4gICAgICAgIGlmICghdGhpcy5pbWFnZVNpZygpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggbmFtZSAnJHtpbWFnZX0nIG5vdCBmb3VuZGApO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiPCEgLS1cbi8qKlxuKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4qIENvcHlyaWdodCAoQykgMjAyMSBTYWxlc0FnaWxpdHkgTHRkLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuKiB0aGUgdGVybXMgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDMgYXMgcHVibGlzaGVkIGJ5IHRoZVxuKiBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24gd2l0aCB0aGUgYWRkaXRpb24gb2YgdGhlIGZvbGxvd2luZyBwZXJtaXNzaW9uIGFkZGVkXG4qIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiogSU4gV0hJQ0ggVEhFIENPUFlSSUdIVCBJUyBPV05FRCBCWSBTQUxFU0FHSUxJVFksIFNBTEVTQUdJTElUWSBESVNDTEFJTVMgVEhFXG4qIFdBUlJBTlRZIE9GIE5PTiBJTkZSSU5HRU1FTlQgT0YgVEhJUkQgUEFSVFkgUklHSFRTLlxuKlxuKiBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiogQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2YgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1NcbiogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuKiBkZXRhaWxzLlxuKlxuKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiogYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSBodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMuXG4qXG4qIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuKiB2ZXJzaW9uIDMsIHRoZXNlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCByZXRhaW4gdGhlIGRpc3BsYXkgb2YgdGhlXG4qIFwiU3VwZXJjaGFyZ2VkIGJ5IFN1aXRlQ1JNXCIgbG9nby4gSWYgdGhlIGRpc3BsYXkgb2YgdGhlIGxvZ29zIGlzIG5vdCByZWFzb25hYmx5XG4qIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4qIHRoZSB3b3JkcyBcIlN1cGVyY2hhcmdlZCBieSBTdWl0ZUNSTVwiLlxuKi9cbi0tPlxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImltYWdlU2lnKCkgYXMgaW1nXCI+XG5cbiAgICA8c3ZnLWljb24gKm5nSWY9XCJpbWcudHlwZSA9PT0gJ3N2ZydcIiBbc3ZnQ2xhc3NdPVwia2xhc3MgfHwgJydcIiBbdGl0bGVdPVwidGl0bGUgfHwgJydcIiBjbGFzcz1cInt7d3JhcHBlckNsYXNzfX1cIlxuICAgICAgICAgICAgICBuYW1lPVwie3tpbWcubmFtZX19XCI+PC9zdmctaWNvbj5cblxuICAgIDxpbWcgKm5nSWY9XCJpbWcudHlwZSAhPT0nc3ZnJ1wiIGFsdD1cIlwiIHNyYz1cInt7aW1nLnBhdGh9fVwiIGNsYXNzPVwie3trbGFzc319XCIgW3RpdGxlXT1cInRpdGxlIHx8ICcnXCI+XG5cbjwvbmctY29udGFpbmVyPlxuIl19