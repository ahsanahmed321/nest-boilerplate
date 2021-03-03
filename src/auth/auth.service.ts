import { Injectable } from '@nestjs/common';
const bcrypt = require('bcrypt');

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login(user: any) {
    // console.log(user);
    const payload = { username: user._doc.username, id: user._doc._id };
    // console.log('JWT sign payload', payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
