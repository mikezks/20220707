import * as angularCommon from '@angular/common';
import * as angularCommonHttp from '@angular/common/http';
import * as angularCore from '@angular/core';
import * as angularForms from '@angular/forms';
import * as angularPlatformBrowser from '@angular/platform-browser';
import * as angularRouter from '@angular/router';
import * as rxjs from 'rxjs';
import * as tslib from 'tslib';

export const globalDeps: { name: string, package: unknown }[] = [
  { name: '@angular/common', package: angularCommon },
  { name: '@angular/core', package: angularCore },
  { name: '@angular/forms', package: angularForms },
  { name: '@angular/platform-browser', package: angularPlatformBrowser },
  { name: '@angular/router', package: angularRouter },
  { name: 'rxjs', package: rxjs },
  { name: 'tslib', package: tslib }
];
