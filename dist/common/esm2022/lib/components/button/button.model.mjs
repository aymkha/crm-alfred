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
export class Button {
    klass;
    onClick;
    label;
    icon;
    labelKey;
    titleKey;
    labelModule;
    constructor(klass = null, onClick = null, label = null, icon = null, labelKey = null, titleKey = null, labelModule = null) {
        this.klass = klass;
        this.onClick = onClick;
        this.label = label;
        this.icon = icon;
        this.labelKey = labelKey;
        this.titleKey = titleKey;
        this.labelModule = labelModule;
    }
    static fromButton(button) {
        return new Button(button.klass, button.onClick, button.label, button.icon, button.labelKey, button.titleKey, button.labelModule);
    }
    static appendClasses(button, newClasses) {
        if (!button.klass) {
            button.klass = newClasses;
            return;
        }
        if (typeof button.klass === 'string') {
            button.klass = newClasses.join(' ') + ' ' + button.klass;
            return;
        }
        if (button.klass instanceof Array || button.klass instanceof Set) {
            button.klass = [
                ...button.klass,
                ...newClasses
            ];
            return;
        }
        if (button.klass instanceof Object) {
            const classes = {
                ...button.klass,
            };
            classes[newClasses.join(' ')] = true;
            button.klass = classes;
        }
    }
    addClasses(newClasses) {
        if (!this.klass) {
            this.klass = newClasses;
            return;
        }
        if (typeof this.klass === 'string') {
            this.klass = newClasses.join(' ') + ' ' + this.klass;
            return;
        }
        if (this.klass instanceof Array || this.klass instanceof Set) {
            this.klass = [
                ...this.klass,
                ...newClasses
            ];
            return;
        }
        if (this.klass instanceof Object) {
            const classes = {
                ...this.klass,
            };
            classes[newClasses.join(' ')] = true;
            this.klass = classes;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vY29yZS9hcHAvY29tbW9uL3NyYy9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7QUFtQkgsTUFBTSxPQUFPLE1BQU07SUFHSjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQVBYLFlBQ1csUUFBa0UsSUFBSSxFQUN0RSxVQUEwQixJQUFJLEVBQzlCLFFBQWdCLElBQUksRUFDcEIsT0FBZSxJQUFJLEVBQ25CLFdBQW1CLElBQUksRUFDdkIsV0FBbUIsSUFBSSxFQUN2QixjQUFzQixJQUFJO1FBTjFCLFVBQUssR0FBTCxLQUFLLENBQWlFO1FBQ3RFLFlBQU8sR0FBUCxPQUFPLENBQXVCO1FBQzlCLFVBQUssR0FBTCxLQUFLLENBQWU7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUNuQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQWU7UUFDdkIsZ0JBQVcsR0FBWCxXQUFXLENBQWU7SUFFckMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBdUI7UUFDNUMsT0FBTyxJQUFJLE1BQU0sQ0FDYixNQUFNLENBQUMsS0FBSyxFQUNaLE1BQU0sQ0FBQyxPQUFPLEVBQ2QsTUFBTSxDQUFDLEtBQUssRUFDWixNQUFNLENBQUMsSUFBSSxFQUNYLE1BQU0sQ0FBQyxRQUFRLEVBQ2YsTUFBTSxDQUFDLFFBQVEsRUFDZixNQUFNLENBQUMsV0FBVyxDQUNyQixDQUFDO0lBQ04sQ0FBQztJQUVNLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBdUIsRUFBRSxVQUFvQjtRQUVyRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNmLE1BQU0sQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO1lBQzFCLE9BQU87U0FDVjtRQUVELElBQUksT0FBTyxNQUFNLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUNsQyxNQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDekQsT0FBTztTQUNWO1FBRUQsSUFBSSxNQUFNLENBQUMsS0FBSyxZQUFZLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxZQUFZLEdBQUcsRUFBRTtZQUM5RCxNQUFNLENBQUMsS0FBSyxHQUFHO2dCQUNYLEdBQUcsTUFBTSxDQUFDLEtBQUs7Z0JBQ2YsR0FBRyxVQUFVO2FBQ2hCLENBQUM7WUFFRixPQUFPO1NBQ1Y7UUFFRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLFlBQVksTUFBTSxFQUFFO1lBQ2hDLE1BQU0sT0FBTyxHQUFHO2dCQUNaLEdBQUcsTUFBTSxDQUFDLEtBQUs7YUFDbEIsQ0FBQztZQUVGLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3JDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUVNLFVBQVUsQ0FBQyxVQUFvQjtRQUVsQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO1lBQ3hCLE9BQU87U0FDVjtRQUVELElBQUksT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDckQsT0FBTztTQUNWO1FBRUQsSUFBSSxJQUFJLENBQUMsS0FBSyxZQUFZLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxZQUFZLEdBQUcsRUFBRTtZQUMxRCxJQUFJLENBQUMsS0FBSyxHQUFHO2dCQUNULEdBQUcsSUFBSSxDQUFDLEtBQUs7Z0JBQ2IsR0FBRyxVQUFVO2FBQ2hCLENBQUM7WUFFRixPQUFPO1NBQ1Y7UUFFRCxJQUFJLElBQUksQ0FBQyxLQUFLLFlBQVksTUFBTSxFQUFFO1lBQzlCLE1BQU0sT0FBTyxHQUFHO2dCQUNaLEdBQUcsSUFBSSxDQUFDLEtBQUs7YUFDaEIsQ0FBQztZQUVGLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdWl0ZUNSTSBpcyBhIGN1c3RvbWVyIHJlbGF0aW9uc2hpcCBtYW5hZ2VtZW50IHByb2dyYW0gZGV2ZWxvcGVkIGJ5IFNhbGVzQWdpbGl0eSBMdGQuXG4gKiBDb3B5cmlnaHQgKEMpIDIwMjEgU2FsZXNBZ2lsaXR5IEx0ZC5cbiAqXG4gKiBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdCB1bmRlclxuICogdGhlIHRlcm1zIG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgdmVyc2lvbiAzIGFzIHB1Ymxpc2hlZCBieSB0aGVcbiAqIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiB3aXRoIHRoZSBhZGRpdGlvbiBvZiB0aGUgZm9sbG93aW5nIHBlcm1pc3Npb24gYWRkZWRcbiAqIHRvIFNlY3Rpb24gMTUgYXMgcGVybWl0dGVkIGluIFNlY3Rpb24gNyhhKTogRk9SIEFOWSBQQVJUIE9GIFRIRSBDT1ZFUkVEIFdPUktcbiAqIElOIFdISUNIIFRIRSBDT1BZUklHSFQgSVMgT1dORUQgQlkgU0FMRVNBR0lMSVRZLCBTQUxFU0FHSUxJVFkgRElTQ0xBSU1TIFRIRVxuICogV0FSUkFOVFkgT0YgTk9OIElORlJJTkdFTUVOVCBPRiBUSElSRCBQQVJUWSBSSUdIVFMuXG4gKlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUXG4gKiBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTU1xuICogRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiBTZWUgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZVxuICogZGV0YWlscy5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgQWZmZXJvIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICpcbiAqIEluIGFjY29yZGFuY2Ugd2l0aCBTZWN0aW9uIDcoYikgb2YgdGhlIEdOVSBBZmZlcm8gR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogdmVyc2lvbiAzLCB0aGVzZSBBcHByb3ByaWF0ZSBMZWdhbCBOb3RpY2VzIG11c3QgcmV0YWluIHRoZSBkaXNwbGF5IG9mIHRoZVxuICogXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIiBsb2dvLiBJZiB0aGUgZGlzcGxheSBvZiB0aGUgbG9nb3MgaXMgbm90IHJlYXNvbmFibHlcbiAqIGZlYXNpYmxlIGZvciB0ZWNobmljYWwgcmVhc29ucywgdGhlIEFwcHJvcHJpYXRlIExlZ2FsIE5vdGljZXMgbXVzdCBkaXNwbGF5XG4gKiB0aGUgd29yZHMgXCJTdXBlcmNoYXJnZWQgYnkgU3VpdGVDUk1cIi5cbiAqL1xuXG5leHBvcnQgZGVjbGFyZSB0eXBlIEJ1dHRvbkNhbGxiYWNrID0gKC4uLmFyZ3MpID0+IHZvaWQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uSW50ZXJmYWNlIHtcbiAgICBrbGFzcz86IHN0cmluZyB8IHN0cmluZ1tdIHwgU2V0PHN0cmluZz4gfCB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuICAgIG9uQ2xpY2s/OiBCdXR0b25DYWxsYmFjaztcbiAgICBkZWJvdW5jZUNsaWNrPzogYm9vbGVhbjtcbiAgICBjbGlja0RlYm91bmNlVGltZT86IG51bWJlcjtcbiAgICBsYWJlbD86IHN0cmluZztcbiAgICBsYWJlbEtleT86IHN0cmluZztcbiAgICB0aXRsZUtleT86IHN0cmluZztcbiAgICB0aXRsZT86IHN0cmluZztcbiAgICBpY29uPzogc3RyaW5nO1xuICAgIGljb25LbGFzcz86IHN0cmluZztcbiAgICBsYWJlbE1vZHVsZT86IHN0cmluZztcbiAgICBzZWN0aW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgQnV0dG9uIGltcGxlbWVudHMgQnV0dG9uSW50ZXJmYWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwdWJsaWMga2xhc3M6IHN0cmluZyB8IHN0cmluZ1tdIHwgU2V0PHN0cmluZz4gfCB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0gbnVsbCxcbiAgICAgICAgcHVibGljIG9uQ2xpY2s6IEJ1dHRvbkNhbGxiYWNrID0gbnVsbCxcbiAgICAgICAgcHVibGljIGxhYmVsOiBzdHJpbmcgPSBudWxsLFxuICAgICAgICBwdWJsaWMgaWNvbjogc3RyaW5nID0gbnVsbCxcbiAgICAgICAgcHVibGljIGxhYmVsS2V5OiBzdHJpbmcgPSBudWxsLFxuICAgICAgICBwdWJsaWMgdGl0bGVLZXk6IHN0cmluZyA9IG51bGwsXG4gICAgICAgIHB1YmxpYyBsYWJlbE1vZHVsZTogc3RyaW5nID0gbnVsbFxuICAgICkge1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZnJvbUJ1dHRvbihidXR0b246IEJ1dHRvbkludGVyZmFjZSk6IEJ1dHRvbiB7XG4gICAgICAgIHJldHVybiBuZXcgQnV0dG9uKFxuICAgICAgICAgICAgYnV0dG9uLmtsYXNzLFxuICAgICAgICAgICAgYnV0dG9uLm9uQ2xpY2ssXG4gICAgICAgICAgICBidXR0b24ubGFiZWwsXG4gICAgICAgICAgICBidXR0b24uaWNvbixcbiAgICAgICAgICAgIGJ1dHRvbi5sYWJlbEtleSxcbiAgICAgICAgICAgIGJ1dHRvbi50aXRsZUtleSxcbiAgICAgICAgICAgIGJ1dHRvbi5sYWJlbE1vZHVsZVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXBwZW5kQ2xhc3NlcyhidXR0b246IEJ1dHRvbkludGVyZmFjZSwgbmV3Q2xhc3Nlczogc3RyaW5nW10pOiB2b2lkIHtcblxuICAgICAgICBpZiAoIWJ1dHRvbi5rbGFzcykge1xuICAgICAgICAgICAgYnV0dG9uLmtsYXNzID0gbmV3Q2xhc3NlcztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgYnV0dG9uLmtsYXNzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgYnV0dG9uLmtsYXNzID0gbmV3Q2xhc3Nlcy5qb2luKCcgJykgKyAnICcgKyBidXR0b24ua2xhc3M7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYnV0dG9uLmtsYXNzIGluc3RhbmNlb2YgQXJyYXkgfHwgYnV0dG9uLmtsYXNzIGluc3RhbmNlb2YgU2V0KSB7XG4gICAgICAgICAgICBidXR0b24ua2xhc3MgPSBbXG4gICAgICAgICAgICAgICAgLi4uYnV0dG9uLmtsYXNzLFxuICAgICAgICAgICAgICAgIC4uLm5ld0NsYXNzZXNcbiAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChidXR0b24ua2xhc3MgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSB7XG4gICAgICAgICAgICAgICAgLi4uYnV0dG9uLmtsYXNzLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY2xhc3Nlc1tuZXdDbGFzc2VzLmpvaW4oJyAnKV0gPSB0cnVlO1xuICAgICAgICAgICAgYnV0dG9uLmtsYXNzID0gY2xhc3NlcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBhZGRDbGFzc2VzKG5ld0NsYXNzZXM6IHN0cmluZ1tdKTogdm9pZCB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmtsYXNzKSB7XG4gICAgICAgICAgICB0aGlzLmtsYXNzID0gbmV3Q2xhc3NlcztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5rbGFzcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRoaXMua2xhc3MgPSBuZXdDbGFzc2VzLmpvaW4oJyAnKSArICcgJyArIHRoaXMua2xhc3M7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5rbGFzcyBpbnN0YW5jZW9mIEFycmF5IHx8IHRoaXMua2xhc3MgaW5zdGFuY2VvZiBTZXQpIHtcbiAgICAgICAgICAgIHRoaXMua2xhc3MgPSBbXG4gICAgICAgICAgICAgICAgLi4udGhpcy5rbGFzcyxcbiAgICAgICAgICAgICAgICAuLi5uZXdDbGFzc2VzXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5rbGFzcyBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgICAgICAgICAgICAuLi50aGlzLmtsYXNzLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY2xhc3Nlc1tuZXdDbGFzc2VzLmpvaW4oJyAnKV0gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5rbGFzcyA9IGNsYXNzZXM7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=