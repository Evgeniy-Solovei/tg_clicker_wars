from django.db import models


class Person(models.Model):
    lvl = models.IntegerField(default=1)
    money = models.IntegerField(default=0)
    start_energy = models.IntegerField(default=100)
    now_energy = models.IntegerField(default=100)
    name = models.CharField(unique=True, max_length=100)
    tg_id = models.BigIntegerField()
    army = models.ManyToManyField('Army', related_name='person', null=True, blank=True)

    def __str__(self):
        return f'Имя:{self.name}, id:{self.pk}, tg_id:{self.tg_id}'


class Castle(models.Model):
    person = models.OneToOneField(Person, related_name='castle', on_delete=models.CASCADE)
    lvl = models.IntegerField(default=1)
    start_hp = models.IntegerField(default=100000)
    now_hp = models.IntegerField(default=100000)

    def __str__(self):
        return f'Игрок:{self.person.pk}, lvl:{self.lvl}, hp:{self.now_hp}'


class Picture(models.Model):
    name = models.CharField(max_length=40)
    image = models.ImageField(null=False, blank=False, upload_to='media')

    def __str__(self):
        return f'имя: {self.name}'


class Army(models.Model):
    image = models.ForeignKey(Picture, on_delete=models.SET_NULL, related_name='army', null=True, blank=True)
    id_person = models.IntegerField(default=1)
    name = models.CharField(max_length=100)
    speed = models.IntegerField(default=1)
    bring_money = models.IntegerField(default=1)
    energy = models.IntegerField(default=1)

    def __str__(self):
        return f'Имя:{self.name}, Скорость:{self.speed}, Денег приносит:{self.bring_money}'