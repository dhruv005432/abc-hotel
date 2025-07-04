import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: any[] = [];
  newEvent = {
    title: '',
    date: '',
    location: '',
    description: ''
  };

  constructor(private eventService: EventsService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventService.getEvents().subscribe(data => {
      this.events = data;
    });
  }

  addEvent(): void {
    debugger;
    console.log('New Event:', JSON.stringify(this.newEvent));
    alert(`Event "${this.newEvent.title}" added successfully!`);
    this.eventService.addEvent(this.newEvent).subscribe(() => {
      this.loadEvents();
      this.newEvent = { title: '', date: '', location: '', description: '' };
    });
  }

  deleteEvent(id: number): void {
    if (confirm('Are you sure you want to delete this event?')) {
      this.eventService.deleteEvent(id).subscribe(() => {
        this.loadEvents();
      });
    }
  }
}
