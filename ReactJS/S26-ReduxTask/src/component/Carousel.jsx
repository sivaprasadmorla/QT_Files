import React from 'react'

const Carousel = () => {
  return (
    <div>
      

<div id="default-carousel" class="relative w-full" data-carousel="slide">
    
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
         
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC4ALgDASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAQFAQMGAgf/xABCEAACAQMCBAQDBAcGBAcAAAABAgMABBESIQUxQVETImFxBoGRFDJCoSNSdLHB0eEWJDRiovAVM4KzQ0Rjo9Li8f/EABoBAQADAQEBAAAAAAAAAAAAAAACAwQFAQb/xAAtEQACAgEEAAQGAgIDAAAAAAAAAQIDEQQSITETMkFRBRQiYXGxI/AzkYHR4f/aAAwDAQACEQMRAD8A+qEnJ3P1rG/c/WnU0oBv3P1rO/c/WsUoBv3P1pv3P1pSgG/c/Wm/c/WlKAzv3P1rG/c/Wlabm5t7OGS4uG0xoDy3Z2wSFQd6JZ4PG8cs3ZPc/WmT3P1ri7b46a4QSjhkYjYkKPtTlhgZ3PhYz8qlL8YqV1HhpGeWLrbHLrFmr/l7PYo+Zq9zqsnufrTfufrXKN8YYaMf8OGhpEQ4ucvgnHlygXP+/WunhmhuIkmhfVG+QDyIKnBVgdwQdiKhOuUPMiyFsbPKzbv3P1rG/c/WlKrLBv3P1pv3P1pSgG/c/Ws79z9axSgG/c/Wm/c/WlKAyM5G56daVgcx8qUA6mlOppQClKUApSoN9xWw4eUSdz4rqXSNeZUEDLHp/T6+pN8I8bS7J1a5ZreBWeaVI1X7xdsYz6c/yrnbj4lUllgQsv4SAUUnHXV5iPp+dU9zxS+uA6lgiMnhsiZIKk5O7knfrv8AurRDTyly+jPZqYwyl2dHd/E3CbcP4YknKgkn/lRgDmSz74/6a5u94tPxjLAxqoWSGFIyXRNY0ljnme/tUJFlZwIlYvvjSQMbcyzEKB3yaz9nuU+0TrFw+NItAka1P6SR9sahEBDsD0yd+dbIVQrZinbOxHN8JnWOCWNt9DAIMbksMED023q2SdCMuJQu/wB2MHYc9iRVNNHJaXktzCjvbSysWMQ/w5LeZXPIAHkfUVZ/a7+RSpa8dSDqXxCRg52OTjeozsmniJOuquSzIt7fhyXMayi6WEI8Th7iMqkZAWUBznYgb+tbuC8deHi/FVjuIp7SUDxS/wDd4nntkSIywA5xq3ztvjlttX3tz4FiixOVa5to4sZ3GnBdyOXb2OehqHw+3higjdEKsY1j8xySqu5B+ed6jOudqWWTpurob4zlP/w+qRX9pKEOoprA0+JspOceVuR/r61K5gMN1PIjcH2Ir5fHNNESY3Zc89J2I2OCDtU21veKm4eSG4kjdgWcoQq4VTgeGPKeXLFVy0uOUyUdWnw0fQ6VzlvxriiBPtFtHdRsCVktyIpiAcZMR/8AiKubG/tOIQtNbMxCO0cqONMkbqcFXXP0/wB4yyg4muNil0SqUpUCYpSlABzHypWRzHypQGDzNKdTSgFKVquJ4LWGSedtMcYycbsxPJVHc9KLkN4Nd7drZwPKUMkhyIYl5yP6+g2yf51wvEoruWQXcswln8aYyhSuGPhtlVLMDtjA26VaxXrcSurqWbKlUAhRNB0w53Tzjpzz3/LZJBmF/OA0cik6TEMqrrH+qDgjG/8APNbYfwvnswz/AJlldHOZz4Z3GVzg7H5inevUgMcjrsQjMhI3GASMg1FadTeC2XJMMBnuG/CviECNPc7n6d9tqks4MLrlhS9zf3HzrYJ5VjWFfKokMpK/eZ9sEn0wMV4rB6VLgry0abaabh8nFry5aFLfiNpcWYaNcNJdLoB0QoCMuuxGACQMelVHPcRyKfswjV8a7fxU1rqbOEyeeN8BR137WkkSMxfA181PPSfT+NRo2gRnESxvcljqjjxleh8V98D3OewqlQaf1Ps2OcZLMF0l36v+/o0CC6u5HmkjZIUkWBScABtOoLj23qyQaVVdvKAuwwNhjYV4jXP6Rt2OwIBAxjGQPWtwjlKl/Dk0DBLaW0gEZBJxirujI+TzVhw8DSSD5tbY3AyQFwMnkeob+dV9WHC3AkeI6QXwyswBAK81K8znbbPSoWeXgnU/q5LiHTF4ryYQIGkkZg48URDUW0Z1lgATuetc3wvid7YyQ3kOC0yq88bHCSrIfEZWx77Hp++84tK8HB+KSosoL2skRO2pHnYwBZZG3Jy2+O9c0qhVVRyACj2AxWemG9NM13WOuUWkfULS6gvbeG5gbVFKMjOxUg4KsO4OxrfXHfD989quhmdoGdvEQKX08gGTG4O+CMb5FdgCCAQQQQCCDkEHcEGsVlfhywbKrPEimZpSlVloHMfKlBzHypQDqaU6mlAYJVVZmZVVFLOzEBVVRkkk9BXEcY4uOITBI2ItoSwhXlrPIyN6np2H5zPiXi4Ytw22bKqR9rdTs75/5QI6Dm3r7b8nqywPTIPzO2e9RhqFXPjk3r4ZK6luTxkmiV4CssZ0vH5lJAIz6g7Y71c2l/w66jKzGKKSQMrLKqebKKCQx2PLbfpXPTPmJjvkbH371plBEEeHZN8FkOGAOxwe9dpwjbFM+X3T083Bk6/S5jnumhgurtvFEei2RGyxBONTMqgVVD7TDePDd2U9rLdJBct9pZQ75Xw0UaMryXbDHryO1dLwSCKCyt0hRysRlIQtqmwrMobU506TkZzVleWFvfWfgSgaAY7mOZQQyypjTKrvg4O6sMcqxWQim0zp0amaSaSyuVxz/s5ldTAksMf5f51mpF5AtvczxLuqnKkkElGAYZK7Z3qPWyqO2PeTm6m7xJcJJL0SS/Xf5PSRNK6Iv4j5jgnSuRljjfavDRW8aTJ+lWdbh0KhUERQDcnSc6s5zVjw5FdplCu0jjwwFIOpTzBHMb43/jUC4VVuLkBVB8eUHQGxnUeWrf617ublhEYxiobn2zESB5IUOMFhnpkDcgfuro4mKBACxwG2B8oAzhQAGTGo4G/SubVmVg6nDKRpI7irKK7TT4g0aoiraJWjUNoU6QWYDYcyc7n32hdFtZJ6eSTwZ4paRBVubdRp1tHN4YOnIwNfIDmcH1996jIGnfBJ8vckb7VNuONcNuraSGCYtcSnQqsfKQhy8gZWKk52IGenbesjjYO8kkviOy6FCghETOdgSTk9T6ch1rpuz9HqabtI4xd0uvt7/npGL6aeUWkDTSsst5GxDOxUiMGVjgnHQVtFRrgqt1w7P3VW7I2J8xVANgCakruBWyKRzZNvGSVazrBIC6hkyDuoYgj3/P8ApXXcK4hGkccTsvgEZR0A0Rnyg5Kk7EnfYYPvtxFe4ppomLROyMRglTzHqKptpVhdTe6/wfUaVzfw9xr7T/cLuTNyMm3dsAypuSnuOY9PbfpK5U4uDwzrwmpx3IDmPlSg5j5UqJMHmaU6mlAUnGOAw8QWSa30xXhVs9I59uUnY+v19OGlguIJZLeWNkkUlZFcYK+/TfpivqlV3FOFW/EosHEdygIhmxnH+RwNyv7v31fL1zmnLhHQq+JX0VuEUn7Z9D53IgWIqCTllJJPr0rFwuYSOzLj61KurWe1eW2nQrKh8wO435MpHQ9K0TNoiDMDg5K+unoPXl9a+grjGEVGPR8nfZO2bnZ2zoeEIWsbD8LthgACxL6izFRyDY5k7Yx1q1RSTpTeTARmiw7EkYOqRhjffYVScKuoYLa3hu3VJYgYZQ6sQwy2n7oOydsd+9er7iiskkVsxYuDrnZfDIDYykSLjHXf1+ZxThKU2jZCyMIJkC9mWa5uJVLFGkIjL4DaF8q5xtyFR8jasA5G/TIrHKtyWFg57eXk9anUq6EqynIIOCCORBoUkkR7lmQ6pmRhrXxC5XWW0Dp61qaVFzk5/dntmi4IUj8QB+o5VBTjJ4i+S11WQipSXDPXID0qPcwfakMbNiMB2KDYPJpwms/qjnjr8sVteRV25ntyrysyHAO2/PO3zqEr64y2OXJfXodROHiwg2itbh4l4ZapC2LmIpeW8p2InIDHOeh5fIdqnWswuI1d00TAATxMMPFIOYIO+Ox6it5xyrP/AOVbhZyZt8sYyQ7na5sDvv8Aal/0KakRgtoRQNTEKoJABJOAMnatUm81mc7L9q1evlUDNbMlWDKcMpDKegIOQTXqkmsojKDjLEi8h4XZBUM7TyMdzpOiPI5rHo3J3yME5x0ry3A5J2K2MitIG0mJ21KDkZbxR+HBzkj0585HDFk4gwjt9OUKvMzA6IRqzhupJywAyAcdQK663t4raMRoSxAUM74LvpGAWI/KsE7pQffJ0a6YTXXBX8J4HZ8LDSbTXkiqJbhhyAGNESnkv5nqegtqUrG228s2pJLCA5j3FKDmPlSvD0HmaUPM0oBSlKAgcT4Zb8Th0P5JkBMEwGSh/VYdVPUVS8P+F5PMeKSxvDq1LaQFimoEYkeU4OdugG3U11NKsVsox2plUqYSlua5Pn/FlVOJcSVFCKtzIFVQAAPQCoBqx4zvxTiX7RJzHtVca6tfkRybfOzxIWiDyhS6IuZEQZcKObqDsQOo+fSoQ4hDG0serVF4BntXXmwBCvCwP4lJGPQ+mTZxrI7AR51g5DalQL6l2IA+tJLBLszT3i2Dx2aN4Zgj1TyTsAq+JOFQaVzk4BzyzXk5YR7Uk2sldqYqrHPmRSBzwWGrAq5sLNLqLSZIcsECFWcSRuVBwcgKR3H+zUumgHIzg7kciMelXMMnC7GyQ3srXZRBd/Y42AtYSIg2Zn6nA3Arj6OU9801hn1XxeFfg1Sg8x59fsUSyGQz5Uq0c8sBDbnMT+G2cbYznFZAJIx1xy/3mvED3s0UN5eDy3s0hJwFaGWVzLGrDGMMOXbGOlTFVQdvUZO5ryWhttsy+EWx+NafT0JRWZY6xxn/AK/B7ArDA4yMZ7Hka9CvcUTTOEBAH4ieQGNh8+VdySSjg+OjJ792Mkv4cg4ZxO/4haXAileOw1sqSKZIWMyqHUocg1Ln+FeJLdxwwOj2shJ+0tgGFRz8SPOS3bGx9OlvwKG3juLpo44kd4mZwI0jlwZBjWqjlttvXQVzPFlW2kzrThC/EmsfgjWNja8Ot47a2UhF8zM2C8jnm7nqT/TkKk0pVDbbyy1JJYQpSleHoHMfKlBzHypQDqaUPM0oBSlKAUpSgOA4wc8U4l+0yfkcVXmp3GDjifEv2qXPtk1UPcKbyK2Xdo4HuZ26IreRF9zufkO9diElhL7I41lcs7scNskGtnjP4KwjATW0jY5sxwPMfTG1azyrzkirMZKOj1WpkSRHjIBDrpIxt35Vs3rSlzFJFJFBEHuRcNrnLP4ESABTGQAAWB3wD7kdYuWGl7lsIboyk30bmZgrKDtIMMCAQRnUMhgRsdxtWEDBRqIZvxEDGT3wNqKOp3PLNbPDmYFlikKABiwRsAHODntsakV8vg8Dfep/DwpZsnDatiNyBpxuvbfc9OftA5CpfD51jnKMQFlAGpuSMp1Bv3jn1qNnlZKt4kjruEBhLMGHKCPBJGfMQ2x+8R2JNXFVXCgdUuVYHSdQYbhgwGSf83MDpnFWtcifZ2oL6RSlKgTFKUoAOY+VKDmPlSgHU0p1NKAUpSgFKUoD51xzx04jxZ4YbidhdOPCt4w7Es2APMwG/vXPlrmG7RbqwuLR76GOQm6wpKxloVVdOV6frf8A27m4iC8QvnALNJeyMVBy7aGyPCXVgkb5yPesT2dvxCymtpkPhTKCZACzxugJV0Y4UMh2IGds961SjFr7Mqr1E4+iynxws/7OZGtsnIAzyXc1k9OfvUm9thaziNTlTGkinIOzDB3U45g4qNtW2mG2Oc5z/f8Ag52qt8SWEkkvRJfv1/LPUSPK6xjOWPPso3LH2G9eWAR5Ix+BmTfAIwcbgVO4cqNM2VYvp0poK582zDSfTr0qNNCkbXJ1RK0dy8JiUHWQNy46Y6c69cnuwVxjHZufZ4RdbxpnAZgD7dcfwro4DoCAZ8p+6p8qqu5UaQy4zhR/WuaTUrK4PmDBlPYjcVaQXaMF+7qjEeVlZAHVDkLqYA8/vHVyqN0WydE0uDbxS1jMZuYlAaN9E+gEavKCWYaQMgnB9xVISBjJxk4Hqee1Tp+O8MmgniSXN1JmBV1DQXPmch0YqSOQA5j8qmONzIZpJtZwVjVQQqA8ydRJJPy9t96ars4gardI1F3S6Xtzz+ekdZ8KO7Xl+GdmAs49mYkDEgG2a7CuN+Ev8bxD9jj/AO7XZVn1P+Rlmlea0KUpWc0ilKUBkcx8qVgcx8qUAPM0p1NKAUpSgFKUoDmbxA13xAYCkzuN84ZmY6dQG+r9XHPma2hdLDb9MpODhXkJJOPJjQo6EfyqLdXduvEOIpNIFaK5kB1HSGgJBKqR13589vXFRr3ikMKultIkszbCSIMkUW2DjGCW2BBzitahJ4SMe+MctlbxSRZL2cKWKREQKXVVb9GMHOB3zUGmonJJyTzJ3JPemeVdCK2pI5knubZkFufbl6V5LF2ZmJZ3JZmJySx3JJo8iIDk7gcv50UMY1lCP4eQpcKdAYrq06uWab4t4T5JumyMVNrhmRnFaZoftCpEzERFwZVXYyKOSEj8PU98fX20irzBz0xWsTIc5yP4e9Vyvri9snyX16LUWQ8SEW0QF4ck3DWgL/pWdp1kA06LhCVUgc8DGKk2c7zRqJ00XcXknRhg6htrXPNW5gj+FSulYqzajPvkso6b4R/xnEf2SL/u12Vcb8Ib3fEj2tYR/wC6a7KuZqHmxtHV00XGtJilKVnNApSlABzHypQcx8qUAPM0oeZpQClKUApSlAfO+MNr4txbTnC3UiknqQBnFV+9WvGIyOLcVJH/AJgn6qpqtcY+ddivyI4l3nZoYuodgpdUUsyoMyYG5ZB1xzI7e2DEW+gSRV1AwSxSywyDOVkQamhYHrjzL8x0qwRZS6iMOZMjQEzqyO2K2Pw0Xjt9sh4eIbRWuJmiEb3buFYpH4luAgyfvHUx9s17OW09qSb5K1ZGkjSQqRrTUAT+tyq64fAk0fgPcRmNwsnhq8odJCoAdQ4Ckjkw3/Kqh08NWJGAukjTywOgHOreGDhNnFFLxBmnm8NX+xwtiOJdOr+8S98cwDtXI0jl4k1Jcn0/xaMFRVKDTTzz/f0U0rOLi+t2B12tw9s5GCCyAEkAbY3GK84JO3XtnufnWEmubsHiE6KsF7dSBFVQvgLIT4AwBjSQML7etSlRVOdyd9zz3qE9FbbZ7I0U/GNNpqF6yx1j1/WD0AQFHYCvJ1dMZ9etet6220DTyCMEAEEkn0BIHMc+VdvCUcHx29ys345bLz4Mlie94uiuhkS1tS6K6sVBkfBYKdq7auf+H7ayglv5IYII5ZlUyFY445iquyhZFXLYG+N8b7V0FciaxJnbU96TxgUpSoHopSlABzHuKUHMe4pQDqaU6mlAKUpQClKUBT8W4Kl/me3ZY7sAatefDnAGAHxuD2P19OLu4Li2l8G5heCXfCyDAYd0YeUj2NfTK1ywwTxmKeKOWNuaSqrqfkwrTVqHDh8oy26aNnK4Z8wK4GPrW5JXSCSFQAJXDSNvqYAYC+3Wuym+GeDyEmIT25PSCTKfJJQwqE3wmf8Aw+InH/q2wJ+qOP3VrWorfZjeltj0csQAMnc9B3qO6iRXjY7OjRnsAy4Oa67+yMhPm4kP+i13/OStS/Bs41k8SjzlimLZ2A7agZR86fMQz2erTWbXk50DCPHgaJF0OrBWVlyCAVYEbYBG3T0ryFbA1kFupUYBPfFdN/Y+cYA4nGfe1YfkJayvwhMPvcSTH+W1JP8Aqlr3x6/ch8vb1g5Yg5x1NW/A7We4eXwE1OjaGYHEaHA2lbpzJGNxjlvtf2/wpwuMhria5uT+qxWGM+6xAN/qq8hhgt40hgijiiTZEiUKo9gKpt1KaxEvp0sk8yNFlZJaIxLeJO4AkkIxkDcKOuB6kn17S6UrC3k6CWOBSlK8PRSlKADmPlSg5j5UoDODk7GsYPY0pQDB7Gs4PY0pQDB7GsYPY0pQDB7GmD2NKUBnB7GsYPY0pQGcHsab9jSlAMHsaxg9jSlAZwexrGD2NKUAwexpg9jSlAZwexpg9jSlAYwexpg9jSlAZAORselKUoD/2Q==" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
       
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://th.bing.com/th/id/OIP.Iuln_dvGiuikb6DDoT6H_wHaKD?w=184&h=250&c=7&r=0&o=5&pid=1.7" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://th.bing.com/th/id/OIP._Gs9Da-BuoAA_hB0ZTWkKgHaKD?w=184&h=250&c=7&r=0&o=5&pid=1.7" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://th.bing.com/th/id/OIP.wBJcMgXZZWGiX74Vy2xr-AHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://th.bing.com/th/id/OIP.TSJK-ndW3rqixkrHyLtKQAHaIm?w=184&h=215&c=7&r=0&o=5&pid=1.7" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
   
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

    </div>
  )
}

export default Carousel
