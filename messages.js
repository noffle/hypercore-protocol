var protobuf = require('protocol-buffers')

module.exports = protobuf(`
  message Open {
    required bytes nonce = 1;
    required bytes discoveryKey = 2;
  }

  message Handshake {
    required bytes id = 1;
    repeated string extensions = 2;
  }

  message Have {
    required uint64 start = 1;
    optional uint64 end = 2;
    optional bytes bitfield = 3;
  }

  message Unhave {
    required uint64 start = 1;
    optional uint64 end = 2;
  }

  message Unwant {
    required uint64 start = 1;
    optional uint64 end = 2;
  }

  message Request {
    required uint64 block = 1;
    optional uint64 bytes = 2;

    optional bool hash = 3;
    optional uint64 nodes = 4;
  }

  message Data {
    message Node {
      required uint64 index = 1;
      required bytes hash = 2;
      required uint64 size = 3;
    }

    required uint64 block = 1;
    optional bytes value = 2;
    repeated Node nodes = 3;
    optional bytes signature = 4;
  }

  message Cancel {
    required uint64 block = 1;
    optional uint64 bytes = 2;
    optional bool hash = 3;
  }
`)
