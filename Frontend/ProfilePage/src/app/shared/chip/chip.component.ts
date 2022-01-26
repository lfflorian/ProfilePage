import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Strengths } from 'src/app/model/user';
import { ShareSkillService } from 'src/app/services/share-skill.service';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {

  @Input() strength: Strengths;
  constructor(private router: Router,
              private shareSkill: ShareSkillService) { }

  ngOnInit(): void {
  }

  skillSelected(skill : Strengths) {
    this.shareSkill.shareSkill(skill)
    this.router.navigateByUrl(`profile/skill`)
  }
}
