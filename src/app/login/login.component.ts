import { Component, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';
import { URLs } from '../configs/urls';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  constructor(private authService: AuthService) {}

  loginWithMicrosoft() {
    this.authService.loginWithMicrosoft();
  }

  ngAfterViewInit() {
    this.initTypingAnimation();
    this.initIconStrip();
  }

  private initTypingAnimation() {
    new Typed("#typed-output", {
      strings: [
        "Sync meetings, tasks, and files across Microsoft 365.",
        "Get AI-powered insights for next steps in projects.",
        "Identify key stakeholders &amp; track project memebers.",
        "Classify projects using Teams transcripts & emails.",
        "Manage context across Teams, Outlook &amp; Planner.",
        "Access, edit &amp; collaborate on files with SharePoint.",
        "Plan &amp; automate meetings seamlessly with Planner."
      ],
      typeSpeed: 40,
      backSpeed: 10,
      backDelay: 2000,
      loop: true
    });
  }

  private initIconStrip() {
    const canvas = document.getElementById('animationCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    const icons = [
      "assets/outlook.svg",
      "assets/teams.svg",
      "assets/planner.svg",
      "assets/onedrive.svg",
      "assets/365.svg",
      "assets/todo.svg",
      "assets/sharepoint.svg",
    ];

    const iconImages: HTMLImageElement[] = [];
    let positions: number[] = [];
    let iconSize = 60; // Size of each icon
    let spacing = 80; // Spacing between icons
    const speed = 0.8; // Movement speed

    // Load all icons
    icons.forEach((src, index) => {
      const img = new Image();
      img.style.imageRendering = 'crisp-edges';
      img.src = src;
      img.onload = () => {
        iconImages[index] = img;
        positions[index] = index * (iconSize + spacing);
        positions[index + icons.length] = positions[index] + (icons.length * (iconSize + spacing)); // Duplicate set
      };
    });

    function animate() {
      requestAnimationFrame(animate);
      ctx!.clearRect(0, 0, canvas.width, canvas.height);

      ctx!.imageSmoothingEnabled = true;
      ctx!.imageSmoothingQuality = 'high';


      for (let i = 0; i < iconImages.length * 2; i++) {
        let realIndex = i % icons.length;
        if (iconImages[realIndex]) {
          ctx!.drawImage(
            iconImages[realIndex],
            positions[i],
            canvas.height / 2 - iconSize / 2,
            iconSize,
            iconSize
          );
          positions[i] -= speed;

          if (positions[i] < -iconSize) {
            let lastPos = Math.max(...positions);
            positions[i] = lastPos + iconSize + spacing;
          }
        }
      }
    }

    // Adjust canvas size dynamically
    function resizeCanvas() {
      const screenWidth = window.innerWidth;
      canvas.width = screenWidth > 600 ? screenWidth * 0.5 : screenWidth * 0.8; // Adjust width for mobile
      canvas.height = screenWidth > 600 ? 80 : 60; // Reduce height on smaller screens

      // **Adjust icon size dynamically**
      iconSize = screenWidth > 600 ? 60 : 35; // Reduce icon size on smaller screens
      spacing = screenWidth > 600 ? 80 : 35; // Reduce spacing on smaller screens
    }


    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
  }

}
