# How to resize the disk of a arch linux instance running with Virtualbox

## Step 1: resize Virtualbox disk

```
$ VBoxManage modifyhd Polly.vdi --resize 65536
```

65536 is 64GB

## Step 2: Resize partition using parted

First, you have to make sure the partition is not mounted. If you're resize a root partition, you can use a Arch Linux installation iso to boot the Virtual Machine. And run parted from there.
To resize your partition, do:

```
parted /dev/sda resizepart 1 64000M
```

## Step 3: Resize file system

```
resize2fs /dev/sda1 64000M
```

Here you may encounter two problems.

* It may ask you to run `e2fsck -f /dev/sdb1` first. Go ahead and run it, it's harmless.
* `resize2fs` may report that there is not enough blocks on your device. In this case, it will report how many blocks are available on the device.
Use whatever number it reports and replace 64000M with the number of blocks and run `resize2fs` again.
