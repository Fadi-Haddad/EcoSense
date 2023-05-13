#ifndef SECRETS_H
#define SECRETS_H

// for the following variables, replace with your Wifi credentials:
const char* ssid = "YOUR-SSID";
const char* password = "YOUR-PASSWORD";

// for the follwoing addresses : Replace the ('http://192.168.0.100') with the ip of your computer, Replace <8000> witht the PORT number your Express server is running on
const char* postUrl = "http://192.168.0.100:8000/data/save";
const char* readUrl = "http://192.168.0.100:8000/device/get_devices_state"; 

#endif