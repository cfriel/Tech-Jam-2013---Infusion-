﻿$(function () {

    var doctors = [
        {
            id: 1,
            name: 'Peter Newhook MD',
            address: '330 Hudson st',
            specialty: 'Surgery',
            phoneNumber: '555-555-1234',
            pictureUrl: '/images/dr1.jpg'
        },
        {
            id: 2,
            name: 'Dr. Stephen Jakisa',
            address: '1303 Yonge St, Toronto, Ontario',
            specialty: 'Internal Medecine',
            phoneNumber: '555-555-4321',
            pictureUrl: '/images/dr2.jpg',
            notification: true
        },
        {
            id: 3,
            name: 'Matthew Pavelko',
            address: '901 Stewart Avenue, #205, Garden City, NY‎ ',
            specialty: 'Chief of Beef',
            phoneNumber: '555-555-4321',
            pictureUrl: '/images/dr3.jpg',
        },
        {
            id: 4,
            name: 'Noah Santorello',
            address: '1303 Yonge St, Toronto, Ontario',
            specialty: 'Pediatrics',
            phoneNumber: '555-555-4321',
            pictureUrl: '/images/dr4.jpg',
        },
        {
            id: 5,
            name: 'Geoffrey MacNeil',
            address: '1303 Yonge St, Toronto, Ontario',
            specialty: 'Internal Medecine',
            phoneNumber: '555-555-4321',
            pictureUrl: '/images/dr5.jpg',
        },
        {
            id: 6,
            name: 'Chris Friel',
            address: '1303 Yonge St, Toronto, Ontario',
            specialty: 'Internal Medecine',
            phoneNumber: '555-555-4321',
            pictureUrl: '/images/dr6.jpg',
        },
        {
            id: 7,
            name: 'Your Name Here',
            address: '1303 Yonge St, Toronto, Ontario',
            specialty: 'Internal Medecine',
            phoneNumber: '555-555-4321',
            pictureUrl: '/images/dr7.jpg',
    }];

    function ViewModel() {
        var that = this;
        this.doctors = ko.observableArray();
        this.currentDoctor = ko.observableArray();
        this.showModal = function (doctor) {
            that.currentDoctor(doctor);
            $('#doctor-modal').modal();
        };
    }

    function Doctor() {
        this.id = ko.observable();
        this.name = ko.observable();
        this.address = ko.observable();
        this.specialty = ko.observable();
        this.pictureUrl = ko.observable();
        this.phoneNumber = ko.observable();
        this.notification = ko.observable();
    }

    var vm = new ViewModel();
    for (var i = 0; i < doctors.length; i++) {
        var doctor = new Doctor();
        doctor.id(doctors[i].id);
        doctor.name(doctors[i].name);
        doctor.address(doctors[i].address);
        doctor.specialty(doctors[i].specialty);
        doctor.pictureUrl(doctors[i].pictureUrl);
        doctor.phoneNumber(doctors[i].phoneNumber);
        doctor.notification(doctors[i].notification);
        vm.doctors.push(doctor);
    }

    ko.applyBindings(vm);
    
    function getURLParameter(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
    }

    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(32.314647, -110.915595),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    var map = new google.maps.Map(document.getElementById("map-host"), mapOptions);
    $('#doctor-modal').on('shown.bs.modal', function () {
        google.maps.event.trigger(map, "resize");
    });
    
    var doctorId = getURLParameter('doctorId');

    if (doctorId != null) {
        $('#doctorId_' + doctorId).click();
    }
});