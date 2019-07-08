import { Component, OnInit } from '@angular/core';
import { MqttClient } from 'mqtt';
import * as mqttClient from '../../../mqtt/mqtt.min.js';
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styles: []
})
export class SubscribeComponent implements OnInit {

  no = 1;
  mqttClient: MqttClient;
  constructor() { }

  async ngOnInit() {
    await this.connectMqtt();
    await this.subscribeMqtt();
    await this.messageMqtt();
  }

  connectMqtt() {
    try {
      this.mqttClient = new mqttClient('mqtt://localhost:8883', {
        clienId: Math.floor(Math.random() * 10000),
        username: 'mqtt',
        password: 'password'
      });
    } catch (error) {
      console.log(error);
    }
  }

  subscribeMqtt() {
    const topic = 'test';
    const that = this;
    this.mqttClient.on('connect', () => {
      that.mqttClient.subscribe(topic, (err) => {
        if (err) {
          console.log('Subscribe Error!!');
        }
      });
    });
  }

  messageMqtt() {
    this.mqttClient.on('message', (topic, payload) => {
      this.no++;
    });
  }
}
