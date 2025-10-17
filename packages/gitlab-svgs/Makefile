svgs_src_files := $(shell find sprite_icons illustrations -name '*.svg')
svgs_dist_dir := dist
svgs_build_script := ./build_scripts/build-svgs.sh

# There are other targets, but since all are rewritten as part of every build,
# we only need to check some.
svgs_built_files := $(svgs_dist_dir)/icons.svg $(svgs_dist_dir)/illustrations.svg

.PHONY: svgs
svgs: $(svgs_built_files)

.PHONY: clean
clean:
	@rm -rf $(svgs_dist_dir)

$(svgs_built_files): $(svgs_src_files) $(svgs_build_script) package.json ../../yarn.lock
	$(svgs_build_script)
	@test -f $@ || (echo "Error: $@ was not created" && exit 1)
