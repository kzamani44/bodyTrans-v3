from django.db import models

# Create your models here.

class UserReg(models.Model):
    username = models.CharField(max_length=100)
    usermail = models.EmailField(max_length=300)


    def __str__(self):
        return f"{self.id}: {self.username} and {self.usermail}"