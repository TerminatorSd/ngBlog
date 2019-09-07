/**
 * @author shaoDong
 * @email scut_sd@163.com
 * @create date 2018-08-24 09:25:40
 * @modify date 2018-08-24 09:25:40
 * @desc button component
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sd-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {

  private _type = 'default';
  private _size = 'default';
  private _disabled = false;
  private classMap: object;
  private prefixCls = 'btn';

  @Input()
  get type() {
    return this._type;
  }
  set type(value: string) {
    this._type = value;
    this.setClassMap();
  }

  @Input()
  get size() {
    return this._size;
  }
  set size(value: string) {
    this._size = value;
    this.setClassMap();
  }

  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = value;
    this.setClassMap();
  }

  constructor() { }

  ngOnInit() { }

  setClassMap() {
    this.classMap = {
      [ `${this.prefixCls}-${this.type}` ]               : true,
      [ `${this.prefixCls}-${this.size}` ]               : true,
      [ `${this.prefixCls}-${this.disabled}` ]           : this.disabled
    };
  }

}
