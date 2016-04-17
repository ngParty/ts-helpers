import { expect } from 'chai';
import './index';

describe( `ts-helpers`, () => {

  const hasOwnProperty = Object.prototype.hasOwnProperty;

  it( `should work`, () => {

    expect( true ).to.equal( true );

  } );

  describe( `__assign`, () => {

    it( `should exist on global`, () => {

      expect( hasOwnProperty.call( global, '__assign' ) ).to.equal( true );

    } );

  } );

  describe( `__extends`, () => {

    it( `should exists on global`, () => {

      expect( hasOwnProperty.call( global, '__extends' ) ).to.equal( true );

    } );

  } );

  describe( `__awaiter`, () => {

    it( `should exists on global`, () => {

      expect( hasOwnProperty.call( global, '__awaiter' ) ).to.equal( true );

    } );

  } );

  describe( `__decorate, __param, __metadata`, () => {

    it( `should exists on global`, () => {

      expect( hasOwnProperty.call( global, '__decorate' ) ).to.equal( true );
      expect( hasOwnProperty.call( global, '__param' ) ).to.equal( true );
      expect( hasOwnProperty.call( global, '__metadata' ) ).to.equal( true );

    } );

  } );

} );
