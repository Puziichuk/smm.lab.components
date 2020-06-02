import React from 'react'

import work from './Image/work.jpg'

const Main =()=>{
	return (
    <main className="main">
      <div className="text">
        <div className="mainborder"> Эффективное продвижение вашего бизнеса в соцсетях</div>
	  </div>
      <center><button onclick="show('block')" className="onlineapplication">Онлайн заявка</button></center>
      <div onclick="show('none')" id="gray"></div>
      <div className="form">
        <form action="index.html">
          <input type="text" placeholder="Ваше имя" className="input"></input>
          <input
            type="text"
            placeholder="Ваш телефон"
            className="input"></input>
          <input
            type="submit"
            value="Перезвоните мне"
            className="submit"></input>
        </form>
      </div>
      <div className="soc">
        <div className="name3">Что вы получаете, работая с нами?</div>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="social">
                <a href="url"><img src="images/s1.png" alt="icon"/></a></div>
                <div className="name4">Рост продаж своего бизнеса</div>
			      </div>
              <div className="row">
                <div className="col-md-3">
                  <div className="social">
                    <a href="url"> <img src="images/s2.png" alt="icon"/></a></div>
                  <div className="name4">Стимулирования повторных продаж</div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="social">
                      <a href="url"><img src="images/s3.png" alt="icon"/></a></div>
                    <div className="name4">Получение обратной связи от существующих клиентов</div>
                  </div>
                <div className="row">
                  <div className="col-md-3">
                    <div className="social">
						          <a href="url"><img src="images/s4.png" alt="icon"/></a> </div>
                    <div className="name4">Повышение лояльности целевой аудитории к бренду</div>
                  </div>
                </div>
              </div>
            </div>
			    </div>
            <div className="now">
              <div className="name3">ПОЧЕМУ МЫ?</div>
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="why">
                      <ul>
                        <li>С 2012 года мы занимаемся исключительно 
                          продвижением бизнеса в социальных сетях и знаем об этом всё</li>
                        <li>Мы предоставляем полный комплекс услуг: от разработки стратегии 
                          продвижения до публикации рекламных постов
                          на страницах лидеров мнения</li>
                        <li>Гарантируем самую оперативную обратную связь любым удобным 
                          для вас способом</li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="work">
                        <a href="url">
                          <img src={work} alt="icon"/>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="soc">
              <div className="name3">Наши услуги</div>
              <div className="container">
                <div className="row">
                  <div className="col-md-3">
                    <div className="social">
                      <a href="url">
                        <img src="images/si1.png" alt="icon"/>
                      </a>
                      <a href="url">
                        <img src="images/icon (5).png" alt="icon"/>
                      </a>
                    </div>
                    <div className="services1">
                      <ul><li><a href="url">Продвижение вашей старницы в ВКонтакте</a></li></ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="social">
                        <a href="url"><img src="images/si2.png" alt="icon"/></a>
                        <a href="url"><img src="images/icon (5).png" alt="icon"/></a>
                      </div>
                      <div className="services">
                        <ul><li><a href="url">Продвижение вашей старницы в Facebook</a></li></ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="social">
                          <a href="url"><img src="images/si3.png"alt="icon"/></a>
                          <a href="url"><img src="images/icon (5).png" alt="icon"/></a>
                        </div>
                        <div className="services">
                          <ul><li><a href="url">Продвижение вашей старницы в Одноклассники</a></li></ul>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3">
                          <div className="social"><a href="url"><img src="images/si4.png"alt="icon"/></a>
                            <a href="url"><img src="images/icon (5).png" alt="icon"/></a>
                          </div>
                          <div className="services">
                            <ul><li><a href="url">Продвижение вашей старницы в Instagram</a></li></ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="now">
              <div className="name3">МОЖЕМ СДЕЛАТЬ ВСЕ КОМПЛЕКСНО, А МОЖЕМ ТОЛЬКО РЕКЛАМУ</div>
              <div className="container">
                <div className="row">
                  <div className="col-md-5">
                    <div className="tl">
                      <div className="name8">
                        <ul><li><a href="url">ВКонтакте Standart</a></li></ul>
                        <a href="url"><img src="images/icon (5).png" alt="icon"/></a>
                      </div>
                      <div className="name9"><ul><li>от 60 до 150 $</li></ul></div>
                    </div>
                    <div className="standart">
                      <ul>
                        <li>Юзабилити (анализ саита) для приёма трафика</li>
                        <li>Создание бизнес страницы и первичное наполнение</li>
                        <li>Подбор аудиторий, сегментация по интересам</li>
                        <li>Создание до 4 рекламных объявлений и текстов</li>
                        <li>Запуск таргетированной реклама на 1 (проект)</li>
                        <li>Отчет о проведении рекламной кампании</li>
                        <li>Аналитика результатов рекламной кампании</li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5">
                      <div className="tl">
                        <div className="name8">
                          <ul>
                            <li><a href="url">ВКонтакте Business</a></li>
                          </ul><a href="url"><img src="images/icon (5).png" alt="icon"/></a>
                        </div>
                        <div className="name9"><ul><li>от 150 до 300 $</li></ul></div>
                        <div className="standart">
                          <ul>
                            <li>Юзабилити (анализ саита) для приёма трафика</li>
                            <li> Создание бизнес страницы и первичное наполнение</li>
                            <li>Подбор аудиторий, сегментация по интересам</li>
                            <li>Создание до 4 рекламных объявлений и текстов</li>
                            <li>Запуск таргетированной реклама на 1 (проект)</li>
                            <li>Отчет о проведении рекламной кампании</li>
                            <li>Аналитика результатов рекламной кампании </li>
                            <li>Дизайн обложки, аватарки, постов ( 10 шт. ){" "}</li>
                            <li>Создание и установка Facebook Pixel </li>
                            <li>Настройка UTM меток</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5">
                        <div className="tl">
                          <div className="name8">
                            <ul><li><a href="url">ВКонтакте Pro+</a></li>
                            </ul><a href="url"><img src="images/icon (5).png" alt="icon"/></a>
                          </div>
                          <div className="name9"><ul><li>от 500 до 700 $</li></ul></div>
                          <div className="standart">
                            <ul>
                              <li>Юзабилити (анализ саита) для приёма трафика</li>
                              <li>Создание бизнес страницы и первичное наполнение</li>
                              <li>Подбор аудиторий, сегментация по интересам</li>
                              <li>Создание до 4 рекламных объявлений и текстов</li>
                              <li>Запуск таргетированной реклама на 1 (проект)</li>
                              <li>Отчет о проведении рекламной кампании</li>
                              <li>Аналитика результатов рекламной кампании </li>
                              <li>Дизайн обложки, аватарки, постов ( 10 шт. ){" "}</li>
                              <li>Создание и установка Facebook Pixel </li>
                              <li>Настройка UTM меток</li>
                              <li>Настраиваем ретаргетинг и кампании lool-a-like{" "}</li>
                              <li>Создание сайта (landing page) под товар/услугу{" "}</li>
                              <li>4-ре еженедельных аналитики</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="soc">
              <div className="container">
                <div className="row">
                  <div className="col-md-5">
                    <div className="tl">
                      <div className="name8">
                        <ul><li><a href="url">Facebook Standart</a></li>
                        </ul><a href="url"><img src="images/icon (5).png" alt="icon"/></a>
                      </div>
                      <div className="name9"><ul><li>от 60 до 160 $</li></ul></div>
                    </div>
                    <div className="standart">
                      <ul>
                        <li>Юзабилити (анализ саита) для приёма трафика</li>
                        <li>Создание бизнес страницы и первичное наполнение</li>
                        <li>Подбор аудиторий, сегментация по интересам</li>
                        <li>Создание до 4 рекламных объявлений и текстов</li>
                        <li>Запуск таргетированной реклама на 1 (проект)</li>
                        <li>Отчет о проведении рекламной кампании</li>
                        <li>Аналитика результатов рекламной кампании</li>
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5">
                      <div className="tl">
                        <div className="name8">
                          <ul><li><a href="url">Facebook Business</a></li></ul>
                          <a href="url"><img src="images/icon (5).png" alt="icon"/></a>
                        </div>
                        <div className="name9"><ul><li>от 170 до 350 $</li></ul></div>
                        <div className="standart">
                          <ul>
                            <li>Юзабилити (анализ саита) для приёма трафика</li>
                            <li>Создание бизнес страницы и первичное наполнение</li>
                            <li>Подбор аудиторий, сегментация по интересам</li>
                            <li>Создание до 4 рекламных объявлений и текстов</li>
                            <li>Запуск таргетированной реклама на 1 (проект)</li>
                            <li>Отчет о проведении рекламной кампании</li>
                            <li>Аналитика результатов рекламной кампании </li>
                            <li>Дизайн обложки, аватарки, постов ( 10 шт. ){" "}</li>
                            <li>Создание и установка Facebook Pixel </li>
                            <li>Настройка UTM меток</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5">
                        <div className="tl">
                          <div className="name8">
                            <ul>
                              <li><a href="url">Facebook Pro+</a></li>
                            </ul><a href="url"><img src="images/icon (5).png" alt="icon"/></a>
                          </div>
                          <div className="name9"><ul><li>от 600 до 800 $</li></ul></div>
                          <div className="standart">
                            <ul>
                              <li>Юзабилити (анализ саита) для приёма трафика</li>
                              <li>Создание бизнес страницы и первичное наполнение</li>
                              <li>Подбор аудиторий, сегментация по интересам</li>
                              <li>Создание до 4 рекламных объявлений и текстов</li>
                              <li>Запуск таргетированной реклама на 1 (проект)</li>
                              <li>Отчет о проведении рекламной кампании</li>
                              <li>Аналитика результатов рекламной кампании </li>
                              <li>Дизайн обложки, аватарки, постов ( 10 шт. ){" "}</li>
                              <li>Создание и установка Facebook Pixel </li>
                              <li>Настройка UTM меток</li>
                              <li>Настраиваем ретаргетинг и кампании lool-a-like{" "}</li>
                              <li>Создание сайта (landing page) под товар/услугу{" "}</li>
                              <li>4-ре еженедельных аналитики</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="now">
                <div className="container">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="tl">
                        <div className="name8">
                          <ul><li><a href="url">Одноклассники Standart</a></li>
                          </ul><a href="url"><img src="images/icon (5).png" alt="icon"/></a>
                        </div>
                        <div className="name9"><ul><li>от 40 до 140 $</li></ul> </div>
                      </div>
                      <div className="standart">
                        <ul>
                          <li>Юзабилити (анализ саита) для приёма трафика</li>
                          <li>Создание бизнес страницы и первичное наполнени</li>
                          <li>Подбор аудиторий, сегментация по интересам</li>
                          <li>Создание до 4 рекламных объявлений и текстов</li>
                          <li>Запуск таргетированной реклама на 1 (проект)</li>
                          <li>Отчет о проведении рекламной кампании</li>
                          <li>Аналитика результатов рекламной кампании</li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5">
                        <div className="tl">
                          <div className="name8">
                            <ul>
                              <li><a href="url">Одноклассники Business</a></li>
                              </ul><a href="url"><img src="images/icon (5).png" alt="icon"/></a>
                          </div>
                          <div className="name9"><ul><li>от 110 до 310 $</li></ul></div>
                          <div className="standart">
                            <ul>
                              <li>Юзабилити (анализ саита) для приёма трафика</li>
                              <li> Создание бизнес страницы и первичное наполнение</li>
                              <li>Подбор аудиторий, сегментация по интересам</li>
                              <li>Создание до 4 рекламных объявлений и текстов</li>
                              <li>Запуск таргетированной реклама на 1 (проект)</li>
                              <li>Отчет о проведении рекламной кампании</li>
                              <li>Аналитика результатов рекламной кампании </li>
                              <li>Дизайн обложки, аватарки, постов ( 10 шт. ){" "}</li>
                              <li>Создание и установка Facebook Pixel </li>
                              <li>Настройка UTM меток</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-5">
                          <div className="tl">
                            <div className="name8">
                              <ul><li><a href="url">Одноклассники Pro+</a></li>
                              </ul><a href="url"><img src="images/icon (5).png" alt="icon"/></a>
                            </div>
                            <div className="name9"><ul><li>от 400 до 600 $</li></ul></div>
                            <div className="standart">
                              <ul>
                                <li> Юзабилити (анализ саита) для приёма трафика</li>
                                <li>Создание бизнес страницы и первичное наполнение</li>
                                <li>Подбор аудиторий, сегментация по интересам</li>
                                <li>Создание до 4 рекламных объявлений и текстов</li>
                                <li>Запуск таргетированной реклама на 1 (проект)</li>
                                <li>Отчет о проведении рекламной кампании</li>
                                <li>Аналитика результатов рекламной кампании{" "}</li>
                                <li>Дизайн обложки, аватарки, постов ( 10 шт. ){" "}</li>
                                <li>Создание и установка Facebook Pixel </li>
                                <li>Настройка UTM меток</li>
                                <li>Настраиваем ретаргетинг и кампании lool-a-like{" "}</li>
                                <li>Создание сайта (landing page) под товар/услугу{" "} </li>
                                <li>4-ре еженедельных аналитики</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="soc">
                <div className="container">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="tl">
                        <div className="name8">
                          <ul>
                            <li><a href="url">Instagram Standart</a></li>
                          </ul><a href="url"><img src="images/icon (5).png" alt="icon"/></a>
                        </div>
                        <div className="name9"><ul><li>от 90 до 190 $</li></ul></div>
                      </div>
                      <div className="standart">
                        <ul>
                          <li>Юзабилити (анализ саита) для приёма трафика</li>
                          <li>Создание бизнес страницы и первичное наполнение</li>
                          <li>Подбор аудиторий, сегментация по интересам</li>
                          <li>Создание до 4 рекламных объявлений и текстов</li>
                          <li>Запуск таргетированной реклама на 1 (проект)</li>
                          <li>Отчет о проведении рекламной кампании</li>
                          <li>Аналитика результатов рекламной кампании</li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5">
                        <div className="tl">
                          <div className="name8">
                            <ul><li><a href="url">Instagram Business</a></li>
                            </ul><a href="url"><img src="images/icon (5).png" alt="icon"/></a>
                          </div>
                          <div className="name9"><ul><li>от 200 до 350 $</li></ul></div>
                          <div className="standart">
                            <ul>
                              <li>Юзабилити (анализ саита) для приёма трафика</li>
                              <li>Создание бизнес страницы и первичное наполнение</li>
                              <li>Подбор аудиторий, сегментация по интересам</li>
                              <li>Создание до 4 рекламных объявлений и текстов</li>
                              <li>Запуск таргетированной реклама на 1 (проект)</li>
                              <li>Отчет о проведении рекламной кампании</li>
                              <li>Аналитика результатов рекламной кампании </li>
                              <li>Дизайн обложки, аватарки, постов ( 10 шт. ){" "}</li>
                              <li>Создание и установка Facebook Pixel </li>
                              <li>Настройка UTM меток</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-5">
                          <div className="tl">
                            <div className="name8">
                              <ul><li><a href="url">Instagram Pro+</a></li>
                              </ul><a href="url"><img src="images/icon (5).png" alt="icon"/></a>
                            </div>
                            <div className="name9"><ul><li>от 500 до 800 $</li></ul></div>
                            <div className="standart">
                              <ul>
                                <li>Юзабилити (анализ саита) для приёма трафика</li>
                                <li>Создание бизнес страницы и первичное наполнение</li>
                                <li>Подбор аудиторий, сегментация по интересам</li>
                                <li>Создание до 4 рекламных объявлений и текстов</li>
                                <li>Запуск таргетированной реклама на 1 (проект)</li>
                                <li>Отчет о проведении рекламной кампании</li>
                                <li>Аналитика результатов рекламной кампании{" "}</li>
                                <li>Дизайн обложки, аватарки, постов ( 10 шт. ){" "}</li>
                                <li>Создание и установка Facebook Pixel </li>
                                <li>Настройка UTM меток</li>
                                <li>Настраиваем ретаргетинг и кампании lool-a-like{" "}</li>
                                <li>Создание сайта (landing page) под товар/услугу{" "}</li>
                                <li>4-ре еженедельных аналитики</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="soc">
                <div className="percent">74%</div>
                <div className="name10">Ваших клиентов пользуются социальными сетями{" "}</div>
                <div className="client">
                  <p>Воспользуйтесь услугой продвижения бизнеса</p>
                  <p>в социальных сетях и получите поток новых клиентов</p>
                  <p>в свой бизнес!</p>
                </div>
                <div className="now">
                  <div className="name3">СВЯЖИТЕСЬ С НАМИ ПРЯМО СЕЙЧАС</div>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="t2">
                          <a href="url"><img src="images/c1.png" alt="icon"/></a></div>
                        <div><p className="name6">+38(093) 788-98-98</p></div>
                      </div>
                      <div className="row">
                        <div className="col-md-5">
                          <div className="t2">
                            <a href="url"><img src="images/c2.png" alt="icon"/></a></div>
                          <div><p className="name4">smm-lab-group</p></div>
                        </div>
                        <div className="row">
                          <div className="col-md-5">
                            <div className="t2"><a href="url"><img src="images/c3.png" alt="icon"/></a></div>
                            <div><p className="name4">info@smm-lab.com</p></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </main>
  );
}

export default Main