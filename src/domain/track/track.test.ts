import Track from "./track"

describe("Testing the Track class (track numbers are 1-based index)", () => {
    it("should always return 0 when track is smaller or equal to 1 ", () => {
      expect(new Track(1).toZeroBaseIndex()).toBe(0)
      expect(new Track(0).toZeroBaseIndex()).toBe(0)
      expect(new Track(-20).toZeroBaseIndex()).toBe(0)
      expect(new Track(-100).toZeroBaseIndex()).toBe(0)
  
    })

    it("should return me the zero base index", ()=> {
      expect(new Track(3).toZeroBaseIndex()).toBe(2)
      expect(new Track(55).toZeroBaseIndex()).toBe(54)
      expect(new Track(120).toZeroBaseIndex()).toBe(119)
    })

    it("should give me the track number", ()=> {
      expect(new Track(3).getTrackNumber()).toBe(3)
      expect(new Track(55).getTrackNumber()).toBe(55)
      expect(new Track(120).getTrackNumber()).toBe(120)
    })

    it("should return true when isFirstTrack is invoked and the track is 1 or smaller", () => {
      expect(new Track(1).isFirstTrack()).toBe(true)
      expect(new Track(0).isFirstTrack()).toBe(true)
      expect(new Track(-50).isFirstTrack()).toBe(true)
    })

    it("should return false when isFirstTrack is invoked and the track is larger than 1", () => {
      expect(new Track(5).isFirstTrack()).toBe(false)
      expect(new Track(60).isFirstTrack()).toBe(false)
      expect(new Track(500).isFirstTrack()).toBe(false)
    })

    it("should return false when isLastTrack is invoked and the track is larger than 1", () => {
      expect(new Track(5).isLastTrack()).toBe(false)
      expect(new Track(60).isLastTrack()).toBe(false)
      expect(new Track(500).isLastTrack()).toBe(false)
    })

    it("should be the same as not having a maxLimit when set the maxLimit empty", ()=> {
      expect(new Track(3).defineMaxLimit().getTrackNumber()).toBe(3)
      expect(new Track(55).defineMaxLimit().getTrackNumber()).toBe(55)
      expect(new Track(120).defineMaxLimit().getTrackNumber()).toBe(120)
    })


    it("should return me the zero base index with the maxLimit set", ()=> {
      expect(new Track(3).defineMaxLimit(150).toZeroBaseIndex()).toBe(2)
      expect(new Track(55).defineMaxLimit(150).toZeroBaseIndex()).toBe(54)
      expect(new Track(120).defineMaxLimit(150).toZeroBaseIndex()).toBe(119)
    })

    it("should always return the zero base index of the max limit when the track is larger", ()=> {
      expect(new Track(55).defineMaxLimit(50).toZeroBaseIndex()).toBe(49)
      expect(new Track(120).defineMaxLimit(50).toZeroBaseIndex()).toBe(49)
    })

    it("should give me the track number when the max limit is defined", ()=> {
      expect(new Track(3).defineMaxLimit(50).getTrackNumber()).toBe(3)
      expect(new Track(40).defineMaxLimit(50).getTrackNumber()).toBe(40)
      expect(new Track(25).defineMaxLimit(50).getTrackNumber()).toBe(25)
    })

    it("should return true when isLastTrack is invoked and the track is larger or equal the max limit", () => {
      expect(new Track(50).defineMaxLimit(50).isLastTrack()).toBe(true)
      expect(new Track(60).defineMaxLimit(50).isLastTrack()).toBe(true)
      expect(new Track(500).defineMaxLimit(50).isLastTrack()).toBe(true)
    })

  })
