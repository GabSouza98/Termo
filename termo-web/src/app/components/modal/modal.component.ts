import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserGameInfo } from 'src/app/models/users';
import { Chart, registerables } from 'chart.js';
import  ChartDataLabels  from 'chartjs-plugin-datalabels';
Chart.register(...registerables);
Chart.register(ChartDataLabels);


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() userInfo!: UserGameInfo;

  constructor(public activeModal: NgbActiveModal) { }

  xValues : number[] = [];
  yValues : number[] = [];

  ngOnInit(): void {

    this.userInfo.histogramList.forEach( histogram => {
      this.xValues.push(histogram.attempts);
      this.yValues.push(histogram.sum);
    })

    new Chart("myChart", {
      type: "bar",      
      data: {
          labels: this.xValues,          
          datasets: [{
          backgroundColor: "blue",
          label: 'Games played by attempt',          
          data: this.yValues
          }]
      },

      

      options: {
        indexAxis: 'y',
        scales: {
          y: { title: {display: true, align: 'center', text: "Attempts" } },
          x: { title: {display: true, align: 'center', text: "Games played" } }
        },        
        plugins: {
          datalabels: {
            color: 'white',    
            align: 'start',  
            anchor: 'end',      
            font: {
              weight: 'bold'
            },
            formatter: Math.round
          }
        } 
      }
    });
  }





}
