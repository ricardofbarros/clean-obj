var Code = require('code');
var expect = Code.expect;
var cleanObj = require('../index.js');

describe('Clean an object (non-strict mode)', function() {

  var undfz;
  
  // Wow, so much diversification in this object  
  var obj = {
    string: 'testing',
    number: 1337,
    float: 3.14159,
    date: new Date(),
    fn: function(value) {
      return 'testing - '+value;
    },
    nullz: null,
    undf: undfz,
    childrenObj: {
      string: 'testing',
      number: 1337,
      float: 3.14159,
      date: new Date(),
      fn: function(value) {
        return 'testing - '+value;
      },
      nullz: null,
      undf: undfz    
    }    
  };
  
  // Clean it! non-strictly ofc
  obj = cleanObj(obj);
  
  it('Should keep the property string (non-strict mode)', function(done) {
    expect(obj).to.include('string');    
    expect(obj.string).to.equal('testing');
    done();
  });

  it('Should keep the property number (non-strict mode)', function(done) {
    expect(obj).to.include('number');    
    expect(obj.number).to.equal(1337);
    done();    
  });  

  it('Should keep the property float (non-strict mode)', function(done) {
    expect(obj).to.include('float');    
    expect(obj.float).to.equal(3.14159);
    done();        
  }); 

  it('Should keep the property date (non-strict mode)', function(done) {
    expect(obj).to.include('date');    
    expect(obj.date).to.be.a.date();
    done();      
  });
  
  it('Should keep the property fn (non-strict mode)', function(done) {
    expect(obj).to.include('fn');    
    expect(obj.fn).to.be.a.function();
    done();      
  });

  it('Should not keep the property nullz (non-strict mode)', function(done) {
    expect(obj).to.include('nullz');
    expect(obj.nullz).to.be.a.null();
    done();    
  });  
  
  it('Should not keep the property undf (non-strict mode)', function(done) {
    expect(obj).to.not.include('undf');
    done();        
  });
  
  describe('Now it should have cleaned recursively as well (strict-mode)', function() {

    it('childrenObj should exist (non-strict mode)', function(done) {
      expect(obj).to.include('childrenObj');
      expect(obj.childrenObj).to.be.an.object();
      done();              
    });
    
    it('Should keep the property string (non-strict mode) (recursive)', function(done) {
      expect(obj.childrenObj).to.include('string');    
      expect(obj.childrenObj.string).to.equal('testing');
      done();        
    });

    it('Should keep the property number (non-strict mode) (recursive)', function(done) {
      expect(obj.childrenObj).to.include('number');    
      expect(obj.childrenObj.number).to.equal(1337);
      done();    
    });  

    it('Should keep the property float (non-strict mode) (recursive)', function(done) {
      expect(obj.childrenObj).to.include('float');    
      expect(obj.childrenObj.float).to.equal(3.14159);
      done();           
    }); 

    it('Should keep the property date (non-strict mode) (recursive)', function(done) {
      expect(obj.childrenObj).to.include('date');    
      expect(obj.childrenObj.date).to.be.a.date();
      done();    
    });

    it('Should keep the property fn (non-strict mode) (recursive)', function(done) {
      expect(obj.childrenObj).to.include('fn');    
      expect(obj.childrenObj.fn).to.be.a.function();
      done();            
    });

    it('Should not keep the property nullz (non-strict mode) (recursive)', function(done) {
      expect(obj.childrenObj).to.include('nullz');
      expect(obj.childrenObj.nullz).to.be.a.null();      
      done();
    });  

    it('Should not keep the property undf (non-strict mode) (recursive)', function(done) {
      expect(obj.childrenObj).to.not.include('undf');
      done();
    });
  });
});