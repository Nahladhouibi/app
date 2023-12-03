import { Component } from '@angular/core';
interface Campaign {
  name: string;
  goalAmount: number;
  currentAmount: number;
  description: string;
}

interface User {
  userName: string;
  email: string;
  password: string;
}
@Component({
  selector: 'app-inscrit',
  templateUrl: './inscrit.component.html',
  styleUrls: ['./inscrit.component.css']
})
export class InscritComponent {
  campaignCreated: boolean = false;
  newCampaign: Campaign = { name: '', goalAmount: 0, currentAmount: 0, description: '' };
  createdCampaign: Campaign = { name: '', goalAmount: 0, currentAmount: 0, description: '' };

  newUser: User = { userName: '', email: '' , password:''};

  createCampaign() {
    // Simulating campaign creation (replace this with actual API call)
    this.createdCampaign = { ...this.newCampaign, currentAmount: 0 };
    this.campaignCreated = true;

    // Simulating user registration (replace this with actual API call)
    this.registerUser();
  }

  contribute() {
    // Simulating contribution (replace this with actual API call)
    const contributionAmount = prompt("Montant de la contribution:");
    if (contributionAmount) {
      this.createdCampaign.currentAmount += parseFloat(contributionAmount);
      alert("Merci pour votre contribution!");
    }
  }

  private registerUser() {
    // Simulating user registration (replace this with actual API call)
    console.log("User registered:", this.newUser);
  }

}