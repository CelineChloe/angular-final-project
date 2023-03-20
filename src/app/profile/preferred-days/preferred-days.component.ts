import { Component } from '@angular/core';

@Component({
  selector: 'app-preferred-days',
  templateUrl: './preferred-days.component.html',
  styleUrls: ['./preferred-days.component.css']
})
export class PreferredDaysComponent {
  preferredDays = ['All Day', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; 

  chooseDays: string[] = [];

  handleKeyDown(event: MouseEvent) {
    // Xác định thẻ được click
    const element = event.target as HTMLElement;
    // Lấy nội dung văn bản
    const text = element.textContent;
    
    if(text) {
      const checkDay = this.chooseDays.includes(text);
      if(checkDay) {
        const index = this.chooseDays.indexOf(text);
        const findAllDay = this.chooseDays.indexOf('All Day');

        if (index !== -1) {
          findAllDay !== -1 ?this.chooseDays.splice(0, this.chooseDays.length) : this.chooseDays.splice(index, 1)
        }
      } else {
        text == 'All Day' ? this.chooseDays = [...this.preferredDays] : this.chooseDays.push(text);
      }
    } 
  }
}
