import Style from './style'
	
	static mixinSpProperties(){
		Object.assign(this.naming,{
			custGeom:'path',
			prstGeom:'path'
		})
		
		Object.assign(this.prototype,Drawing.SpProperties)
	}