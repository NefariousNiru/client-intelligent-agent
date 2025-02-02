import { Component, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';
import * as THREE from 'three';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {

  private clientId = 'YOUR_AZURE_CLIENT_ID';
  private tenantId = 'common';
  private redirectUri = 'http://localhost:8000/auth/callback';

  loginWithMicrosoft() {
    const authUrl = `https://login.microsoftonline.com/${this.tenantId}/oauth2/v2.0/authorize?
      client_id=${this.clientId}
      &response_type=code
      &redirect_uri=${encodeURIComponent(this.redirectUri)}
      &scope=Mail.Read Calendars.Read OnlineMeetings.Read User.Read
      &response_mode=query`;
    window.location.href = authUrl;
  }

  ngAfterViewInit() {
    this.initTypingAnimation();
    this.initIconStrip();
  }

  private initTypingAnimation() {
    new Typed("#typed-output", {
      strings: [
        "🥇 Seamless Teams collaboration!",
        "📅 Effortless meeting scheduling.",
        "✅ Smart task planning with Planner.",
        "⏳ OneDrive keeps everything synced.",
        "🚀 SharePoint for easy document access."
      ],
      typeSpeed: 50,
      backSpeed: 25,
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
    const iconSize = 50; // Size of each icon
    const spacing = 80; // Spacing between icons
    const speed = 0.8; // Movement speed

    // Load all icons
    icons.forEach((src, index) => {
      const img = new Image();
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

      // **Loop through icons and animate them**
      for (let i = 0; i < iconImages.length * 2; i++) {
        let realIndex = i % icons.length; // Get the actual index for images
        if (iconImages[realIndex]) {
          ctx!.drawImage(iconImages[realIndex], positions[i], canvas.height / 2 - iconSize / 2, iconSize, iconSize);
          positions[i] -= speed;

          // **If an icon fully moves out of view, reposition it at the end**
          if (positions[i] < -iconSize) {
            let lastPos = Math.max(...positions); // Find the rightmost position
            positions[i] = lastPos + iconSize + spacing; // Move it to the rightmost
          }
        }
      }
    }

    // Adjust canvas size dynamically
    function resizeCanvas() {
      canvas.width = window.innerWidth * 0.5; // Takes 60% of the width
      canvas.height = 80; // Fixed height for the strip
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
  }

}
